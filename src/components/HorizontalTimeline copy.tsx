import React, { useState } from "react";
import type { HorizontalTimelineProps, MilestoneProgress } from "../Interfaces/MilestoneModel";
import { updateMilestoneStatus } from "../services/progressService";

export default function HorizontalTimeline({ 
  milestones = [],
  userId
}: HorizontalTimelineProps): React.ReactElement {
  const [expandedSquare, setExpandedSquare] = useState<number | null>(null);
  const [localMilestones, setLocalMilestones] = useState<MilestoneProgress[]>(milestones);

  // Update local state when milestones prop changes
  React.useEffect(() => {
    setLocalMilestones(milestones);
  }, [milestones]);

  // Add debugging and ensure milestones is an array
  console.log("Milestones received:", milestones);
  console.log("Milestones type:", typeof milestones);
  console.log("Is array:", Array.isArray(milestones));

  // Ensure milestones is always an array
  const milestonesArray = Array.isArray(localMilestones) ? localMilestones : [];

  // Convert milestones to a format that includes completion status
  const milestoneItems = milestonesArray.map((milestone, index) => ({
    id: milestone.Milestone.id,
    title: milestone.Milestone.title,
    description: milestone.Milestone.description,
    isCompleted: milestone.Status === "completed",
    index: index + 1
  }));

  const handleSquareClick = (milestoneId: number) => {
    setExpandedSquare(expandedSquare === milestoneId ? null : milestoneId);
  };

  const handleMarkAsDone = async (milestoneId: number) => {
    if (!userId) {
      console.error("User ID is required to update milestone status");
      return;
    }

    const currentMilestone = localMilestones.find(m => m.Milestone.id === milestoneId);
    if (!currentMilestone) return;

    const newStatus = currentMilestone.Status === "completed" ? "in-progress" : "completed";

    // Update local state immediately for instant UI feedback
    setLocalMilestones(prevMilestones => 
      prevMilestones.map(milestone => {
        if (milestone.Milestone.id === milestoneId) {
          return {
            ...milestone,
            Status: newStatus,
            CompletedAt: newStatus === "completed" ? new Date().toISOString() : undefined
          };
        }
        return milestone;
      })
    );
    
    try {
      // Make API call to persist the change
      await updateMilestoneStatus(userId, milestoneId, newStatus);
      console.log(`Successfully updated milestone ${milestoneId} to ${newStatus}`);
    } catch (error) {
      console.error("Failed to update milestone status:", error);
      
      // Revert local state if API call fails
      setLocalMilestones(prevMilestones => 
        prevMilestones.map(milestone => {
          if (milestone.Milestone.id === milestoneId) {
            return {
              ...milestone,
              Status: currentMilestone.Status,
              CompletedAt: currentMilestone.CompletedAt
            };
          }
          return milestone;
        })
      );
      
      alert("Failed to update milestone status. Please try again.");
    }
    
    setExpandedSquare(null);
  };


  return (
    <div className="w-full max-w-7xl mx-auto p-8">
      {milestoneItems.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600">No milestones available yet.</p>
        </div>
      ) : (
        <div className="flex flex-wrap items-start justify-between" style={{ paddingTop: '40px', paddingBottom: '120px' }}>
          {milestoneItems.map((milestone, index) => {
          const isTopPosition = index % 2 === 0; // Alternate top/bottom
          
          return (
            <div key={milestone.id} className="relative flex-shrink-0 mb-8" style={{ width: '200px', height: '280px', minWidth: '160px' }}>
              {/* Square on top (for even indices) */}
              {isTopPosition && (
                <div className="absolute left-1/2 transform -translate-x-1/2" style={{ top: '-10px' }}>
                  <div 
                    className={`border-2 border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center cursor-pointer hover:scale-110 ${
                      expandedSquare === milestone.id ? 'px-7 py-5 scale-110 z-20' : 'px-5 py-3'
                    } min-w-max whitespace-nowrap`}
                    style={{
                      backgroundColor: milestone.isCompleted ? '#ffffff' : '#f8f9fa'
                    }}
                    onClick={() => handleSquareClick(milestone.id)}
                  >
                    <span className="text-gray-700 text-sm sm:text-base font-medium block">
                      {milestone.title}
                    </span>
                    {expandedSquare === milestone.id && (
                      <button
                        className="mt-2 px-3 py-1 text-white text-xs rounded transition-colors"
                        style={{
                          backgroundColor: milestone.isCompleted ? '#c7b8e6' : '#a2e3cc'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = milestone.isCompleted ? '#b8a6d9' : '#8dd4b8';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = milestone.isCompleted ? '#c7b8e6' : '#a2e3cc';
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMarkAsDone(milestone.id);
                        }}
                      >
                        {milestone.isCompleted ? 'Move back to in progress?' : 'Mark as done?'}
                      </button>
                    )}
                  </div>
                </div>
              )}
              
              {/* Timeline Circle - centered vertically and horizontally */}
              <div 
                className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full border-4 border-white shadow-lg flex items-center justify-center transition-all duration-300 z-10"
                style={{
                  top: '50%',
                  marginTop: '-28px', // Half of circle height to center it
                  backgroundColor: milestone.isCompleted ? '#a2e3cc' : '#e5e7eb'
                }}
              >
                <span className="text-gray-800 font-semibold text-base">
                  {milestone.index}
                </span>
              </div>

              {/* Small arrow pointing from circle to square */}
              <div className="absolute left-1/2 transform -translate-x-1/2" style={{
                top: isTopPosition ? 'calc(50% - 50px)' : 'calc(50% + 50px)',
                opacity: 0.4
              }}>
                <svg 
                  className="w-6 h-6" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  style={{
                    transform: isTopPosition ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                >
                  <path 
                    d="M12 4L12 20M12 20L6 14M12 20L18 14" 
                    stroke="#6b7280" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Square on bottom (for odd indices) */}
              {!isTopPosition && (
                <div className="absolute left-1/2 transform -translate-x-1/2" style={{ bottom: '-10px' }}>
                  <div 
                    className={`border-2 border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center cursor-pointer hover:scale-110 ${
                      expandedSquare === milestone.id ? 'px-7 py-5 scale-110 z-20' : 'px-5 py-3'
                    } min-w-max whitespace-nowrap`}
                    style={{
                      backgroundColor: milestone.isCompleted ? '#ffffff' : '#f8f9fa'
                    }}
                    onClick={() => handleSquareClick(milestone.id)}
                  >
                    <span className="text-gray-700 text-sm sm:text-base font-medium block">
                      {milestone.title}
                    </span>
                    {expandedSquare === milestone.id && (
                      <button
                        className="mt-2 px-3 py-1 text-white text-xs rounded transition-colors"
                        style={{
                          backgroundColor: milestone.isCompleted ? '#c7b8e6' : '#a2e3cc'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = milestone.isCompleted ? '#b8a6d9' : '#8dd4b8';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = milestone.isCompleted ? '#c7b8e6' : '#a2e3cc';
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMarkAsDone(milestone.id);
                        }}
                      >
                        {milestone.isCompleted ? 'Move back to in progress?' : 'Mark as done?'}
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Arrow (except for last item) */}
              {index < milestoneItems.length - 1 && (
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 flex items-center justify-center" style={{ width: '40px' }}>
                  <svg 
                    className="w-4 h-3 sm:w-6 sm:h-4" 
                    viewBox="0 0 24 16" 
                    fill="none"
                  >
                    <path 
                      d="M2 8h16m0 0l-4-4m4 4l-4 4" 
                      stroke="#6b7280" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
              
              {/* Final Arrow (after last circle) */}
              {index === milestoneItems.length - 1 && (
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 flex items-center justify-center ml-2">
                  <svg 
                    className="w-4 h-3 sm:w-6 sm:h-4" 
                    viewBox="0 0 24 16" 
                    fill="none"
                  >
                    <path 
                      d="M2 8h16m0 0l-4-4m4 4l-4 4" 
                      stroke="#c7b8e6" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>
      )}
    </div>
  );
}

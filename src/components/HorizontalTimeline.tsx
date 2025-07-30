import React, { useState } from "react";

interface HorizontalTimelineProps {
  totalItems?: number;
}

export default function HorizontalTimeline({ 
  totalItems = 9
}: HorizontalTimelineProps): React.ReactElement {
  const items = Array.from({ length: totalItems }, (_, index) => index + 1);
  const [clickedItems, setClickedItems] = useState<Set<number>>(new Set());

  const handleCircleClick = (item: number) => {
    setClickedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(item)) {
        newSet.delete(item);
      } else {
        newSet.add(item);
      }
      return newSet;
    });
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-8">
      <div className="flex items-center justify-between">
        {items.map((item, index) => (
          <div key={item} className="flex items-center">
            {/* Timeline Circle */}
            <div className="relative">
              <div 
                className={`w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer hover:opacity-80`}
                style={{
                  backgroundColor: clickedItems.has(item) ? '#a2e3cc' : '#fdfbf1'
                }}
                onClick={() => handleCircleClick(item)}
              >
                <span className="text-gray-800 font-semibold text-sm">
                  {item}
                </span>
              </div>
            </div>
            
            {/* Arrow (except for last item) */}
            {index < items.length - 1 && (
              <div className="flex-1 flex items-center justify-center mx-4">
                <svg 
                  className="w-8 h-6" 
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
            {index === items.length - 1 && (
              <div className="flex items-center justify-center ml-4">
                <svg 
                  className="w-8 h-6" 
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
        ))}
      </div>
    </div>
  );
}

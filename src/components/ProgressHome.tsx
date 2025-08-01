import React from "react";
import type { MilestoneProgress } from "../Interfaces/MilestoneModel";

interface ProgressHomeProps {
    milestones?: MilestoneProgress[];
}

const ProgressHome: React.FC<ProgressHomeProps> = ({ milestones = [] }) => {
    // Filter completed milestones and get the 2 most recent ones
    const completedMilestones = milestones
        .filter(milestone => milestone.Status === "completed")
        .sort((a, b) => new Date(b.CompletedAt || '').getTime() - new Date(a.CompletedAt || '').getTime())
        .slice(0, 2);

    return (
    <div className="bg-orange-100 px-5 rounded-lg p-2">
        <h2 className="text-center underline text-neutral-950">Progress</h2>
        <div className="grid grid-cols-2">
            <div className="text-left">
                {completedMilestones.length > 0 ? (
                    completedMilestones.map((milestone, index) => (
                        <div key={milestone.Milestone.id} className={index > 0 ? "mt-4" : ""}>
                            <h3 className="font-bold">{milestone.Milestone.title}</h3>
                            <p className="text-sm text-gray-600">
                                Completed: {milestone.CompletedAt ? new Date(milestone.CompletedAt).toLocaleDateString() : 'N/A'}
                            </p>
                        </div>
                    ))
                ) : (
                    <div>
                        <h3 className="font-bold">No completed milestones yet</h3>
                        <p>Start your journey to see progress here!</p>
                    </div>
                )}
            </div>
            <div className="text-right">
                <button className="blueBg text-white px-4 py-2 rounded hover:-translate-y-0.5 hover:cursor-pointer hover:!bg-sky-700 transition-all duration-200">
                    View my progress
                </button>
            </div>
        </div>
    </div>
    )
}

export default ProgressHome;
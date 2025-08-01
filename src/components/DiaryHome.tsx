import type React from "react";
import type { DairyModel } from "../Interfaces/DairyModel";

<<<<<<< HEAD
const DiaryHome: () => React.ReactElement = () => (
  <button className="blueBg text-white px-4 py-2 rounded">View my diary</button>
);
=======
interface DiaryHomeProps {
    diaryEntries?: DairyModel[];
}

const DiaryHome: React.FC<DiaryHomeProps> = ({ diaryEntries = [] }) => {
    // Get the 2 most recent diary entries
    const recentEntries = diaryEntries
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 2);

    return (
        <div className="bg-orange-100 px-5 rounded-lg p-2">
            <h2 className="text-center underline text-neutral-950">Diary</h2>
            <div className="grid grid-cols-2">
                <div className="text-left">
                    {recentEntries.length > 0 ? (
                        recentEntries.map((entry, index) => (
                            <div key={entry.id} className={index > 0 ? "mt-4" : ""}>
                                <h3 className="font-bold">{entry.title}</h3>
                                <p className="text-sm text-gray-600">
                                    {new Date(entry.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                        ))
                    ) : (
                        <div>
                            <h3 className="font-bold">No diary entries yet</h3>
                            <p>Start writing to see your entries here!</p>
                        </div>
                    )}
                </div>
                <div className="text-right">
                    <button className="blueBg text-white px-4 py-2 rounded hover:-translate-y-0.5 hover:cursor-pointer hover:!bg-sky-700 transition-all duration-200">
                        View my diary
                    </button>
                </div>
            </div>
        </div>
    );
};
>>>>>>> 77051037a3a475bd7e0f932602dfc391f6c27f10

export default DiaryHome;

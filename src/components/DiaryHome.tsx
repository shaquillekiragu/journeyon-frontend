import type React from "react";

const DiaryHome: () => React.ReactElement = () => (
    <div className="bg-orange-100 px-5 rounded-lg p-2">
        <h2 className="text-center underline text-neutral-950">Diary</h2>
        <div className="grid grid-cols-2">
            <div className="text-left">
                <h3 className="font-bold">Placeholder Entry - 1/1/1970</h3>
                <p>This is some placeholder text.</p>
            </div>
            <div className="text-right">
                <button className="blueBg text-white px-4 py-2 rounded">
                    View my diary
                </button>
            </div>
        </div>
    </div>
);

export default DiaryHome;
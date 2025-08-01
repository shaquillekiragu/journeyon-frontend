import React from "react";
import type { IDiaryEntryProps } from "../interfaces";

export default function DiaryEntry({
  entry,
}: IDiaryEntryProps): React.ReactElement {
  return (
    <div
      className="p-2 rounded-lg mb-6 w-full max-w-2xl"
      style={{
        border: "2px solid #5c7fa3",
      }}
    >
      <div
        className="p-6 rounded-lg shadow-lg"
        style={{
          backgroundColor: "#5c7fa3",
        }}
      >
        <h3 className="text-2xl font-semibold mb-3 text-white underline">
          {entry.title}
        </h3>
        <p className="font-semibold text-white mb-4 opacity-90">
          {entry.date}
        </p>
        <div
          className="p-4 rounded-md"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <p className="text-white leading-relaxed">{entry.body}</p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import type { IDiaryEntryProps } from "../interfaces";

export default function DiaryEntry({
  entry,
}: IDiaryEntryProps): React.ReactElement {
  return (
    <div className="border rounded-md p-4 mb-4 shadow-sm">
      <h3 className="text-lg font-semibold mb-2">{entry.title}</h3>
      <p className="font-semibold">{entry.date}</p>
      <p className="text-gray-700">{entry.body}</p>
    </div>
  );
}

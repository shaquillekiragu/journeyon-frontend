import { type FC } from "react";
import type { DiaryEntryProps } from "../Interfaces/DairyModel";
import formatDate from "../utils/DateFormater";
import { deleteDiaryEntry } from "../services/dairyService";

export const DiaryEntry: FC<DiaryEntryProps> = ({model}) => {
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this diary entry?")) {
      try {
        await deleteDiaryEntry(model.id);
        // Refresh the page after successful deletion
        window.location.reload();
      } catch (error) {
        console.error("Failed to delete diary entry:", error);
        alert("Failed to delete diary entry. Please try again.");
      }
    }
  };

  return (
    <div className="border rounded-md p-4 mb-4 shadow-sm">
      <h3 className="text-lg font-semibold mb-2">{model.title}</h3>
      <p className="font-semibold">{formatDate(model.createdAt)}</p>
      <p className="text-gray-700">{model.body}</p>
      <button
        
        onClick={handleDelete}
        className="mt-3 px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 hover:cursor-pointer transition-colors duration-200"
      >
        Delete
      </button>
    </div>
  );
}

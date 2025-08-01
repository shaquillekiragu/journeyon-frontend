<<<<<<< HEAD
import React from "react";
import type { IDiaryEntryProps } from "../interfaces";
=======
import { type FC, useState } from "react";
import type { DiaryEntryProps } from "../Interfaces/DairyModel";
import formatDate from "../utils/DateFormater";
import { deleteDiaryEntry, updateDiaryEntry } from "../services/dairyService";

export const DiaryEntry: FC<DiaryEntryProps> = ({model}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(model.title);
  const [editBody, setEditBody] = useState(model.body);

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

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      await updateDiaryEntry(model.id, { title: editTitle, body: editBody });
      setIsEditing(false);
      // Refresh the page after successful update
      window.location.reload();
    } catch (error) {
      console.error("Failed to update diary entry:", error);
      alert("Failed to update diary entry. Please try again.");
    }
  };

  const handleCancel = () => {
    setEditTitle(model.title);
    setEditBody(model.body);
    setIsEditing(false);
  };
>>>>>>> 77051037a3a475bd7e0f932602dfc391f6c27f10

  return (
    <div className="border rounded-md p-4 mb-4 shadow-sm relative bg-sky-200">
      {/* Edit button positioned at top right */}
      <button
        onClick={handleEdit}
        className="absolute top-4 right-4 p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded transition-colors duration-200 cursor-pointer"
        title="Edit entry"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
        </svg>
      </button>

      {isEditing ? (
        <>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="text-lg font-semibold mb-2 w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            placeholder="Entry title"
          />
          <p className="font-semibold mb-2">{formatDate(model.createdAt)}</p>
          <textarea
            value={editBody}
            onChange={(e) => setEditBody(e.target.value)}
            className="text-gray-700 w-full p-2 border rounded focus:outline-none focus:border-blue-500 min-h-[100px] resize-vertical"
            placeholder="Entry content"
          />
          <div className="flex gap-2 mt-3">
            <button
              onClick={handleSave}
              className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors duration-200"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-3 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600 transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-lg font-semibold mb-2 pr-8">{model.title}</h3>
          <p className="font-semibold">{formatDate(model.createdAt)}</p>
          <p className="text-gray-700">{model.body}</p>
          <button
            onClick={handleDelete}
            className="mt-3 px-3 py-1 bg-red-500 text-white text-sm rounded opacity-70 hover:opacity-100 hover:bg-red-600 hover:cursor-pointer hover:-translate-y-0.5 transition-all duration-200"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}

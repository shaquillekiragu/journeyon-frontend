import React from "react";
import type { ICreateDiaryEntryFormProps } from "../interfaces";

export default function CreateDiaryEntryForm({
  handleSubmit,
  cancelNewEntry,
}: ICreateDiaryEntryFormProps): React.ReactElement {
  return (
    <div
      className="p-2 rounded-lg w-full max-w-2xl"
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
        <h2 className="text-2xl text-center font-semibold mb-6 text-white underline">
          Create New Entry
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="entryTitle" className="font-semibold text-white">
              Entry Title:
            </label>
            <input
              id="entryTitle"
              name="entryTitle"
              type="text"
              placeholder="Enter your title..."
              className="border bg-white rounded-md px-3 py-2"
              required
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="entryBody" className="font-semibold text-white">
              Your Thoughts:
            </label>
            <textarea
              id="entryBody"
              name="entryBody"
              placeholder="What's on your mind?..."
              className="border bg-white rounded-md px-3 py-3 min-h-[120px] resize-vertical"
              required
            />
          </div>
          
          <div className="flex gap-4 justify-center mt-4">
            <button
              type="button"
              onClick={cancelNewEntry}
              className="text-white font-semibold border rounded-md py-2 px-6 hover:cursor-pointer transition-colors duration-200"
              style={{
                backgroundColor: "#c7b8e6",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#b8a5df";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#c7b8e6";
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-white text-gray-800 font-semibold border rounded-md py-2 px-6 hover:bg-gray-100 hover:cursor-pointer transition-colors duration-200 underline"
            >
              Save Entry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

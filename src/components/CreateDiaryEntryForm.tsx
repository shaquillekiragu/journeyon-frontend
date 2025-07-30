import React from "react";

interface ICreateDiaryEntryFormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  cancelNewEntry: () => void;
}

export default function CreateDiaryEntryForm({
  handleSubmit,
  cancelNewEntry,
}: ICreateDiaryEntryFormProps): React.ReactElement {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 w-full max-w-2xl"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="entryTitle" className="font-semibold">
          Entry title:
        </label>
        <input
          id="entryTitle"
          name="entryTitle"
          type="text"
          placeholder=" Entry title..."
          className="border rounded-md p-1"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="entryBody" className="font-semibold">
          Entry:
        </label>
        <textarea
          id="entryBody"
          name="entryBody"
          placeholder=" What's on your mind??..."
          className="border rounded-md p-3 min-h-[100px] resize-vertical"
          required
        />
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={cancelNewEntry}
          className="border rounded-md hover:cursor-pointer py-1 px-5 w-1/3 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="border rounded-md hover:cursor-pointer py-1 px-5 hover:bg-gray-100"
        >
          Save Entry
        </button>
      </div>
    </form>
  );
}

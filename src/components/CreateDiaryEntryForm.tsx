import React, { useContext, useState } from "react";
import { createDairyEntry, getDairyEntries } from "../services/dairyService";
import { DataContext } from "../contexts/DataContextObject";
import type { NewDairyModel } from "../Interfaces/DairyModel";

interface ICreateDiaryEntryFormProps {
  cancelNewEntry: () => void;
}

export default function CreateDiaryEntryForm({
  cancelNewEntry,
}: ICreateDiaryEntryFormProps ): React.ReactElement {
  
  const [ statetitle, updateTitle ] = useState( "" );
  const [ statebody, updateBody ] = useState( "" );
  const { user, setDairyEntries } = useContext( DataContext );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const data: NewDairyModel = {
      userId: user!.id,
      title: statetitle,
      body: statebody
    }
    const success = await createDairyEntry(data);
    if (success) {
      const entries = await getDairyEntries(user!.id);
      setDairyEntries(entries);
      cancelNewEntry();
    }
  }

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
          onChange={ ( e ) => updateTitle( e.target.value ) }
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
          onChange={(e) => updateBody(e.target.value)}
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

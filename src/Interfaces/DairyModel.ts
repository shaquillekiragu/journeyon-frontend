interface DairyModel{
    id: number,
    userId: number,
    title: string,
    body: string,
    createdAt: string,
    UpdatedAt: string
}

interface DiaryEntryProps {
  model: DairyModel;
}

interface NewDairyModel{
    userId: number,
    title: string,
    body: string,
}

// src/Interfaces/ChildData.ts
export interface EntryFormData {
  title: string;
  body: number;
}

export type { DairyModel, DiaryEntryProps, NewDairyModel };
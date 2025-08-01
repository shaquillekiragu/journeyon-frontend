export interface UserContextType {
  loggedInUser: any | null;
  setLoggedInUser: (user: any | null) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
}

export interface IAccount {
  id: number;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

export interface INewAccount {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface HeaderProps {
  size?: "normal" | "large";
}

export interface SubHeaderProps {
  text: string;
}

export interface HorizontalTimelineProps {
  totalItems?: number;
}

export interface ImageQuoteBannerProps {
  imageSrc: string;
  quote: string;
}

export interface ICreateDiaryEntryFormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  cancelNewEntry: () => void;
}

export interface IDiaryEntryProps {
  entry: {
    id: number;
    title: string;
    body: string;
    date: string;
  };
}

export interface IDiaryEntry {
  id: number;
  title: string;
  body: string;
  date: string;
}

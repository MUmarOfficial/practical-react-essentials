export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Note = {
  title: string;
  id: number;
  completed: boolean;
};

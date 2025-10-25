import { type FC, useEffect } from "react";

type Todo = {
  text: string;
  id: number;
  done: boolean;
};

type TodoItemProps = {
  item: Todo;
  onDelete: (itemId: number) => void;
  onToggle: (itemId: number) => void;
};

const TodoItem: FC<TodoItemProps> = ({ item, onDelete, onToggle }) => {
  useEffect(() => {
    console.log(`component rendered for item ${item.id}`);

    return () => {
      console.log(`component removed for item ${item.id}`);
    };
  }, []);
  return (
    <li
      key={item.id}
      className="flex justify-between items-center flex-wrap w-full p-1.5 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-white gap-2"
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={item.done || false}
          onChange={() => onToggle(item.id)}
        />
        <p className={item.done ? "line-through text-gray-400" : ""}>
          {item.text}
        </p>
      </div>
      <button className="button" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;

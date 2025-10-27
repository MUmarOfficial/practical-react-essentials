import { type FC } from "react";
import type { Todo } from "../types";

type TodoItemProps = {
  item: Todo;
  onDelete: (itemId: number) => void;
  onToggle: (itemId: number) => void;
};

const TodoItem: FC<TodoItemProps> = ({ item, onDelete, onToggle }) => {
  return (
    <li
      key={item.id}
      className="flex justify-between items-center flex-wrap w-full p-1.5 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-white gap-2"
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={item.completed || false}
          onChange={() => onToggle(item.id)}
        />
        <p className={item.completed ? "line-through text-gray-400" : ""}>
          {item.title}
        </p>
      </div>
      <button className="button" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;

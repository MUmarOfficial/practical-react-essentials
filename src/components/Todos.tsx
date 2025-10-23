import { useState } from "react";

type Todo = {
  text: string;
  id: number;
  done: boolean;
};

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { text: "AWS", id: 1, done: false },
    { text: "Node", id: 2, done: false },
    { text: "TypeScript", id: 3, done: false },
    { text: "React", id: 4, done: false },
    { text: "Express", id: 5, done: false },
    { text: "MongoDB", id: 6, done: false },
  ]);

  const deleteItem = (itemId: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== itemId);
    setTodos(filteredTodos);
  };

  const handleToggleDone = (itemId: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === itemId ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <section className="m-7 p-7 justify-center border-2 border-transparent transition duration-300 hover:border-white rounded-2xl bg-black backdrop-blur-xl shadow-lg mx-auto">
      <h1 className="text-3xl font-semibold text-white mb-4">Todos</h1>
      <ul
        className="min-w-xs lg:max-h-80 grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={{
          gridTemplateColumns: undefined, 
        }}
      >
        {todos.map((todoItem) => (
          <li
        key={todoItem.id}
        className="flex justify-between items-center flex-wrap w-full p-1.5 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-white gap-2"
          >
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={todoItem.done || false}
            onChange={() => handleToggleDone(todoItem.id)}
          />
          <p className={todoItem.done ? "line-through text-gray-400" : ""}>
            {todoItem.text}
          </p>
        </div>
        <button className="button" onClick={() => deleteItem(todoItem.id)}>
          Delete
        </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Todos;

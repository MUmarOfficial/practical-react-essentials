import { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([
    {
      text: "Todo 1",
      id: 1,
    },
    {
      text: "Todo 2",
      id: 2,
    },
    {
      text: "Todo 3",
      id: 3,
    },
  ]);

  const deleteItem = (itemId: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== itemId);
    setTodos(filteredTodos);
  };

  return (
    <ul className="flex flex-col gap-5 m-7 p-7 justify-center  border-2 border-transparent transition duration-300 hover:border-white rounded-2xl bg-black backdrop-blur-xl shadow-lg max-w-md min-w-xs mx-auto">
      <h1 className="text-3xl font-semibold text-white mb-4">Todos</h1>
      {todos.map((todoItem) => {
        return (
          <li key={todoItem.id}>
            <button
              className="w-full p-1.5 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-white cursor-pointer"
              onClick={() => deleteItem(todoItem.id)}
              type="button"
            >
              {todoItem.text}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;

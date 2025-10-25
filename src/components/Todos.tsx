import { useState } from "react";
import TodoItem from "./TodoItem";

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
  const [todoText, setTodoText] = useState("");

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

  const addNewTodo = () => {
    setTodos((todos) => {
      return [
        {
          text: todoText,
          id: Date.now(),
          done: false,
        },
        ...todos,
      ];
    });
  };

  return (
    <section className="m-7 p-7 justify-center border-2 border-transparent transition duration-300 hover:border-white rounded-2xl bg-black backdrop-blur-xl shadow-lg mx-auto">
      <h1 className="text-3xl font-semibold text-white mb-2">Todos</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addNewTodo();
        }}
      >
        <input
          type="text"
          className="p-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-white"
          onChange={(event) => {
            setTodoText(event.target.value);
          }}
          value={todoText}
        />
        <button type="submit" className="button m-3">
          Add Todo
        </button>
      </form>
      <ul
        className="min-w-xs lg:max-h-80 grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={{
          gridTemplateColumns: undefined,
        }}
      >
        {todos.map((todoItem) => {
          return (
            <TodoItem
              key={todoItem.id}
              item={todoItem}
              onDelete={deleteItem}
              onToggle={handleToggleDone}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Todos;

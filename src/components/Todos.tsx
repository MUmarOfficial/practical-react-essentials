import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import getTodos from "../api/todo-api";
import type { Todo } from "../types";

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [finishedCount, setFinishedCount] = useState(0);

  const fetchTodos = async () => {
    const todosData = await getTodos();
    setTodos(todosData);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    const compCount = todos.filter(todo => todo.completed).length;
    setFinishedCount(compCount);
  }, [todos])

  const [todoText, setTodoText] = useState("");

  const deleteItem = (itemId: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== itemId);
    setTodos(filteredTodos);
  };

  const handleToggleDone = (itemId: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === itemId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addNewTodo = () => {
    setTodos((todos) => {
      return [
        {
          userId: Date.now(),
          id: Date.now(),
          title: todoText,
          completed: false,
        },
        ...todos,
      ];
    });
  };

  return (
    <section className="m-7 p-7 justify-center border-2 border-transparent transition duration-300 hover:border-white rounded-2xl bg-black backdrop-blur-xl shadow-lg mx-auto">
      <h1 className="text-3xl font-semibold text-white mb-2">Todos</h1>
      <p className="text-xl">Completed: <span className="text-green-600">{ finishedCount }</span></p>
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
        className="min-w-xs grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
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

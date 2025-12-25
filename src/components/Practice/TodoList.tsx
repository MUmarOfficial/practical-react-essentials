import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = [
    {
      title: "Lectures",
      status: "✅",
    },
    {
      title: "Practice on HackerRank",
      status: "✅",
    },
    {
      title: "Work more",
      status: "❌",
    },
  ];

  return (
    <section className="flex flex-col gap-5 m-7 p-7 justify-center  border-2 border-transparent transition duration-300 hover:border-white rounded-2xl bg-black backdrop-blur-xl shadow-lg max-w-md min-w-xs mx-auto">
      <h1 className="text-3xl">Todo List</h1>
      <ul className="flex flex-col gap-4">
        {todos.map((a) => (
          <TodoItem key={a.title} todo={a} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;

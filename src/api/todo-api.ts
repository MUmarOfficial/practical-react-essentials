import type { Todo } from "../types";

const getTodos = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  const jsonData = await data.json();
  return jsonData as Todo[];
};

export default getTodos;

type Props = {
  todo: {
    title: string;
    status: string;
  };
};

const TodoItem = (props: Props) => {
  return (
    <li className="flex justify-between p-3 border-2 b cursor-pointer transition duration-300 rounded-lg bg-[#1a1a1a] backdrop-blur-xl shadow-lg w-full">
      <h2 className="text-xl">{props.todo.title}</h2>
      <span>
        {props.todo.status}
      </span>
    </li>
  );
};

export default TodoItem;

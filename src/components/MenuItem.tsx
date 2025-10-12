type Props = {
  item: {
    name: string;
    quantity: number;
  };
};

const MenuItem = (props: Props) => {
  return (
    <li className="flex justify-between p-3 border-2 b cursor-pointer transition duration-300 rounded-lg bg-[#1a1a1a] backdrop-blur-xl shadow-lg w-full">
      <h2 className="text-xl">{props.item.name}</h2>
      <span className="bg-black size-6 text-center rounded">
        {props.item.quantity}
      </span>
    </li>
  );
};

export default MenuItem;

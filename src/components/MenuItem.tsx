type Props = {
  item: {
    name: string;
    quantity: number;
  };
};

const MenuItem = (props: Props) => {
  return (
    <li className="flex justify-between p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-white">
      <h2 className="text-xl">{props.item.name}</h2>
      <span className="bg-black size-6 text-center rounded">
        {props.item.quantity}
      </span>
    </li>
  );
};

export default MenuItem;

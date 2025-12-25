import MenuItem from "./MenuItem";

const Cart = () => {
  const items = [
    {
      name: "Chicken Handi",
      quantity: 2,
    },
    {
      name: "Biryani",
      quantity: 3,
    },
    {
      name: "BBQ platter",
      quantity: 4,
    },
  ];

  return (
    <section className="flex flex-col gap-5 m-7 p-7 justify-center  border-2 border-transparent transition duration-300 hover:border-white rounded-2xl bg-black backdrop-blur-xl shadow-lg max-w-md min-w-xs mx-auto">
      <h1 className="text-3xl">Your Order</h1>
      <ul className="flex flex-col gap-4">
        {
        items.map((a) => (
          <MenuItem key={a.name} item={a} />
        ))
        }
      </ul>
    </section>
  );
};

export default Cart;

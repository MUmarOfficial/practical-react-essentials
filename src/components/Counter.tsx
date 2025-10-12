import { useState } from "react";
import "../App.css";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => (count > 0 ? count - 1 : count));
  const reset = () => setCount(0);
  
  return (
    <section className="flex flex-col gap-5 m-7 p-7 justify-center  border-2 border-transparent transition duration-300 hover:border-white rounded-2xl bg-black backdrop-blur-xl shadow-lg max-w-md min-w-xs mx-auto">
      <h1 className="text-3xl">Counter</h1>
      <p>{`count is ${count}`}</p>
      <div className="card">
        <Button text={`Increment`} onClick={increment}></Button>
        <Button text={`Decrement`} onClick={decrement}></Button>
      </div>
      <Button text="reset" onClick={reset}></Button>
    </section>
  );
};

export default Counter;

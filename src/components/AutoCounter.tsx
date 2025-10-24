import { useEffect, useState } from "react";
import "../App.css";
import Button from "./Button";

const AutoCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Run on Component mount
    const timer = startCounter();

    return () => {
      // Run on Component UnMount
      clearInterval(timer);
    };
  }, []);

  const startCounter = () => {
    const timer = setInterval(() => {
      setCount((counterValue) => {
        return counterValue + 1;
      });
    }, 1000);
    return timer;
  };
  const stopCounter = () => {};
  const resetCounter = () => setCount(0);

  return (
    <section className="flex flex-col gap-5 m-7 p-7 justify-center  border-2 border-transparent transition duration-300 hover:border-white rounded-2xl bg-black backdrop-blur-xl shadow-lg max-w-md min-w-xs mx-auto">
      <h1 className="text-3xl">Auto Counter</h1>
      <p>{`count is ${count}`}</p>
      <div className="card">
        <Button text={`start Counter`} onClick={startCounter}></Button>
        <Button text={`stop Counter`} onClick={stopCounter}></Button>
      </div>
      <Button text="reset Counter" onClick={resetCounter}></Button>
    </section>
  );
};

export default AutoCounter;

import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="heading p-4  m-4">Counter App</h1>
      <p className="italic mb-2">This is my first react app.</p>
      <p>Click the button below to increase or reset the counter.</p>
      <div className="card">
        <Button
          text={`count is ${count}`}
          onClick={() => setCount((count) => count + 1)}
        ></Button>
        <Button
          text="reset"
          onClick={() => {
            setCount(0);
          }}
        ></Button>
      </div>
    </>
  );
}

export default App;

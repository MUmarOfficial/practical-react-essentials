import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="p-4  m-4">Counter App</h1>
      <p className="italic mb-2">This is my first react app.</p>
      <p>Click the button below to increase or reset the counter.</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => {setCount(0)}}>
          reset
        </button>
      </div>
    </>
  );
}

export default App;

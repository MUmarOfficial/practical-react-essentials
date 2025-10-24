import { useState } from "react";
import "./App.css";
import AutoCounter from "./components/AutoCounter";
import Cart from "./components/Cart";
import Counter from "./components/Counter";
import LoginForm from "./components/LoginForm";
import Todos from "./components/Todos";
import WelcomeMessage from "./components/WelcomeMessage";
import PostsPage from "./PostsPage";

function App() {
  const [showCounter, setShowCounter] = useState(false);
  return (
    <>
      <WelcomeMessage
        isLoggedIn={true}
        user={{
          name: "Umar",
          type: "admin",
        }}
      />
      <div id="root">
        <Cart />
        <Counter />
        <LoginForm />
        <Todos />
        {showCounter && <AutoCounter />}
      </div>
      <button
        className="button min-w-5 mx-auto"
        onClick={() => {
          setShowCounter((show) => !show);
        }}
      >
        Toggle Show Counter
      </button>
      <PostsPage />
    </>
  );
}

export default App;

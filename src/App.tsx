import "./App.css";
import Cart from "./components/Cart";
import Counter from "./components/Counter";
import LoginForm from "./components/LoginForm";
import Todos from "./components/Todos";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
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
      </div>
    </>
  );
}

export default App;

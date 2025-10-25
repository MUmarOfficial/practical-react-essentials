import { useState, type SyntheticEvent } from "react";
import StyledInput from "./StyledInput";


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitForm = (event: SyntheticEvent) => {
    event.preventDefault();
  };


  return (
    <form
      className="flex flex-col gap-6 m-7 p-7 justify-center  border-2 border-transparent transition duration-300 hover:border-white rounded-2xl bg-black backdrop-blur-xl shadow-lg max-w-md min-w-xs mx-auto"
      onSubmit={submitForm}
    >
      <h1 className="text-3xl font-semibold text-white mb-4">Login Form</h1>
      <StyledInput
        type="email"
        value={email}
        placeholder="Enter your email"
        onChange={(ev) => {
          setEmail(ev.target.value);
        }}
      />
      <StyledInput
        type="password"
        value={password}
        placeholder="Enter your password"
        onChange={(ev) => {
          setPassword(ev.target.value);
        }}
        className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-white"
      />
      <button className="button">Submit</button>
    </form>
  );
};

export default LoginForm;

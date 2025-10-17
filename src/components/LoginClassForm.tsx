import React, { type SyntheticEvent } from "react";

class LoginClassForm extends React.Component {
  state = {
    email: "",
    password: "",
  };

  submitForm(ev: SyntheticEvent) {
    ev.preventDefault();
    const target = ev.target as HTMLFormElement;
    console.log(target, this.state);
  }

  render(): React.ReactNode {
    return (
      <form
        className="flex flex-col gap-6 m-7 p-7 justify-center  border-2 border-transparent transition duration-300 hover:border-white rounded-2xl bg-black backdrop-blur-xl shadow-lg max-w-md min-w-xs mx-auto"
        onSubmit={this.submitForm.bind(this)}
      >
        <h1 className="text-3xl font-bold text-white mb-4">Login Form</h1>
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-white"
          onChange={(ev) => {
            this.setState({
              email: ev.target.value,
            });
          }}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-white"
          onChange={(ev) => {
            this.setState({
              password: ev.target.value,
            });
          }}
        />
        <button className="button">Submit</button>
      </form>
    );
  }
}

export default LoginClassForm;

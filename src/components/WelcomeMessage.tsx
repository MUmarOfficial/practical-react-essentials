import { type FC } from "react";

type WelcomeMessageProps = {
  isLoggedIn: boolean;
  user?: {
    name: string;
    type: "admin" | "moderate" | "guest";
  };
};

const WelcomeMessage: FC<WelcomeMessageProps> = ({ isLoggedIn, user }) => {
  if (user?.type === "moderate") {
    return <p>Ask admin for access.</p>;
  } else if (user?.type === "guest") {
    return <p>No access</p>;
  }

  return (
    <div>
      {isLoggedIn ? (
        <h1 className="text-4xl font-bold justify-center text-center p-2 m-1">
          Welcome Back
        </h1>
      ) : (
        <h1 className="text-4xl font-bold justify-center text-center p-2 m-1">
          Welcome Guest
        </h1>
      )}
      {user && (
        <h2 className="text-2xl font-semibold justify-center text-center p-2 m-1">
          Hello, {user.name}!
        </h2>
      )}
    </div>
  );
};

export default WelcomeMessage;

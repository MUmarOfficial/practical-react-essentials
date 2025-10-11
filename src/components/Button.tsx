interface ButtonProps {
  text?: string;
  onClick: () => void;
}

const Button = ({ text = `submit`, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="rounded-lg border border-transparent py-[0.6em] px-[1.2em] text-base 
      font-medium text-inherit bg-[#1a1a1a] cursor-pointer transition duration-300 hover:border-blue-700"
    >
      {text}
    </button>
  );
};

export default Button;

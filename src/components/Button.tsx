
import styles from "./Button.module.css";
interface ButtonProps {
  text?: string;
  onClick?: () => void;
}


const Button = ({ text = `submit`, onClick }: ButtonProps) => {
  return (
    <button
      style={{
        margin: 1,
      }}
      onClick={onClick}
      className={styles.myButton}
    >
      {text}
    </button>
    // <StyledButton>{text}</StyledButton>
  );
};

export default Button;

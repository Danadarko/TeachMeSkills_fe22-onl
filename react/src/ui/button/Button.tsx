import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  type?: "submit" | "button";
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  onClick,
}) => {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

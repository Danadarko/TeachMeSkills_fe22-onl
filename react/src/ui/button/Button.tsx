import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  type?: "submit" | "button" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  role?: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  onClick,
  role,
  className = "",
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
      role={role}
    >
      {children}
    </button>
  );
};

export default Button;

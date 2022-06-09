import React from "react";
import styles from "./Input.module.css";
type InputProps = {
  type: "text" | "email" | "password";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  value: string;
};

const Input: React.FC<InputProps> = ({ type, onChange, title, value }) => {
  return (
    <label className={styles.label}>
      {title}
      <input
        required
        type={type}
        onChange={onChange}
        value={value}
        className={styles.input}
      />
    </label>
  );
};

export default Input;

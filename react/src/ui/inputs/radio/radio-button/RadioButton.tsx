import styles from "./RadioButton.module.css";

type RadioProps = {
  onChange: () => void;
  children: React.ReactNode;
  value: string;
  checked: boolean;
};

const Radio: React.FC<RadioProps> = ({
  onChange,
  children,
  value,
  checked,
}) => {
  return (
    <label className={styles.label}>
      <input
        onChange={onChange}
        type="radio"
        name="sort"
        value={value}
        className={styles.radio}
        checked={checked}
      />
      {children}
    </label>
  );
};
export default Radio;

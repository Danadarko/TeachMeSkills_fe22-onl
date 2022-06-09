import styles from "./Title.module.css";
type TitleProps = {
  children: React.ReactNode;
};

const Title: React.FC<TitleProps> = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};
export default Title;

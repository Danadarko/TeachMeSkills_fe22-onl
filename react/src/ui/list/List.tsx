import styles from "./List.module.css";
type ListProps = {
  children: React.ReactNode;
  listName?: string;
};

const List: React.FC<ListProps> = ({ children, listName }) => {
  return (
    <>
      <div>{listName}</div>
      <ul className={styles.list}>{children}</ul>
    </>
  );
};
export default List;

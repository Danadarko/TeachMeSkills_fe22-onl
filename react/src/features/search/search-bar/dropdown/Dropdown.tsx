import { Post } from "../../../../types/post";
import styles from "./Dropdown.module.css";
import { Link } from "react-router-dom";
import { AppPages } from "../../../../types";

type DropdownProps = {
  list: Post[];
  onSelectedItem: (id: string | number) => void;
};

export const Dropdown: React.FC<DropdownProps> = ({ list, onSelectedItem }) => {
  return (
    <ul className={styles.ul}>
      {list.map((item) => (
        <Link
          to={`${AppPages.All_POSTS}/${item.id}`}
          key={item.id}
          onClick={() => onSelectedItem(item.id)}
        >
          <li className={styles.li}>
            <img src={item.image} className={styles.img} alt={item.title} />
            {item.title}
          </li>
        </Link>
      ))}
    </ul>
  );
};

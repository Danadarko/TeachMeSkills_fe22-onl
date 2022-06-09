import Link, { LinkColor } from "../../ui/link/Link";
import styles from "./Menu.module.css";
import { ReactComponent as LogOutIcon } from "../../assets/log out-icon.svg";

type MenuProps = {};

const Menu: React.FC<MenuProps> = () => {
  return (
    <div className={styles.menu}>
      <Link color={LinkColor.WHITE}>All posts</Link>
      <Link color={LinkColor.WHITE}>My posts</Link>
      <Link color={LinkColor.WHITE}>Add posts</Link>
      <Link color={LinkColor.WHITE}>
        Log out <LogOutIcon />
      </Link>
    </div>
  );
};

export default Menu;

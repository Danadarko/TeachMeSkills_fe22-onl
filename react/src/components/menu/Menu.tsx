import PrimaryLink, { LinkColor } from "../../ui/link/PrimaryLink";
import styles from "./Menu.module.css";
import { ReactComponent as LogOutIcon } from "../../assets/log out-icon.svg";
import { AppPages } from "../../types";
import { Link } from "react-router-dom";

type MenuProps = {};

const Menu: React.FC<MenuProps> = () => {
  return (
    <div className={styles.menu}>
      <Link to={AppPages.All_POSTS} className={styles.defaultLink}>
        <PrimaryLink color={LinkColor.WHITE}>All posts</PrimaryLink>
      </Link>
      <Link to={AppPages.MY_POSTS} className={styles.defaultLink}>
        <PrimaryLink color={LinkColor.WHITE}>My posts</PrimaryLink>
      </Link>
      <Link to={AppPages.ADD_POST_PAGE} className={styles.defaultLink}>
        <PrimaryLink color={LinkColor.WHITE}>Add posts</PrimaryLink>
      </Link>

      <Link to={AppPages.LOGIN} className={styles.defaultLink}>
        <PrimaryLink color={LinkColor.WHITE}>
          Log out <LogOutIcon />
        </PrimaryLink>
      </Link>
    </div>
  );
};

export default Menu;

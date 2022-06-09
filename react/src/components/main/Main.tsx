import Link from "../../ui/link/Link";

import styles from "./Main.module.css";
import { ReactComponent as UserIcon } from "../../assets/user-icon.svg";
type MainProps = {};

const Main: React.FC<MainProps> = () => {
  return (
    <div className={styles.main}>
      <Link>
        <UserIcon />
        Username
      </Link>
    </div>
  );
};

export default Main;

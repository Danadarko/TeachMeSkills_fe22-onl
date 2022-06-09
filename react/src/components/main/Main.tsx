import PrimaryLink from "../../ui/link/PrimaryLink";

import styles from "./Main.module.css";
import { ReactComponent as UserIcon } from "../../assets/user-icon.svg";
type MainProps = {};

const Main: React.FC<MainProps> = () => {
  return (
    <div className={styles.main}>
      <PrimaryLink>
        <UserIcon />
        Username
      </PrimaryLink>
    </div>
  );
};

export default Main;

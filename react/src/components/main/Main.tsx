import PrimaryLink from "../../ui/link/PrimaryLink";

import styles from "./Main.module.css";
import { ReactComponent as UserIcon } from "../../assets/user-icon.svg";
import { useAppDispatch, useAppSelector } from "../../hooks";

import { getUserInfo } from "../../features/user/userSlice";
import { SearchBar } from "../../features/search";
type MainProps = {};

const Main: React.FC<MainProps> = () => {
  const userInfo = useAppSelector((state) => state.user);

  return (
    <div className={styles.main}>
      <PrimaryLink>
        <UserIcon />
        {userInfo ? userInfo.username : "Username"}
      </PrimaryLink>
      <SearchBar></SearchBar>
    </div>
  );
};

export default Main;

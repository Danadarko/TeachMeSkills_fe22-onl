import React, { useState } from "react";
import classnames from "classnames";
import styles from "./Header.module.css";
import { ReactComponent as BurgerIcon } from "../../assets/menu-icon.svg";
import { ReactComponent as CrossIcon } from "../../assets/cross-icon.svg";
import Menu from "../menu/Menu";
import Main from "../main/Main";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const [isOpen, toggleIsOpen] = useState(false);
  return (
    <header
      className={classnames(styles.header, { [styles.headerIsOpen]: isOpen })}
    >
      <div className="container">
        <div className={styles.headerWrapper}>
          <button
            type="button"
            className={styles.button}
            onClick={() => toggleIsOpen(!isOpen)}
          >
            {isOpen ? <CrossIcon /> : <BurgerIcon />}
          </button>
          {isOpen ? <Menu></Menu> : <Main></Main>}
        </div>
      </div>
    </header>
  );
};

export default Header;

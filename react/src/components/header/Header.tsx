import React, { useContext, useState } from "react";
import classnames from "classnames";
import styles from "./Header.module.css";
import { ReactComponent as BurgerIcon } from "../../assets/menu-icon.svg";
import { ReactComponent as CrossIcon } from "../../assets/cross-icon.svg";
import Menu from "../menu/Menu";
import Main from "../main/Main";
import { AppContext } from "../../AppContext";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const [isOpen, toggleIsOpen] = useState(false);
  const appRef = useContext(AppContext);
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
          {isOpen ? <Menu /> : <Main />}
          <input
            type="checkbox"
            className={styles.checkbox}
            id="dark-theme"
            onChange={(event) => {
              const style = appRef?.current!.style!;
              if (event.target.checked) {
                style.setProperty("--background-blue", "var(--ds-blue)");
                style.setProperty("--text-color-blue", "var(--ds-blue)");
                style.setProperty("--text-color-grey", "var(--ds-label-color)");
                style.setProperty("--background-white", "var(--ds-background)");
              } else {
                style.removeProperty("--background-blue");
                style.removeProperty("--primary-text-color");
                style.removeProperty("--text-color-blue");
                style.removeProperty("--background-grey");
                style.removeProperty("--text-color-grey");
                style.removeProperty("--background-white");
              }
            }}
          />
          <label
            htmlFor="dark-theme"
            className={isOpen ? styles.checkboxIsOpen : styles.checkbox}
          >
            Switch to dark theme
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;

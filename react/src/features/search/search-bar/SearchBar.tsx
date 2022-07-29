import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { actions } from "../searchSlice";
import styles from "./SearchBar.module.css";
import { Dropdown } from "./dropdown/Dropdown";
type SearchBarProps = {};

export const SearchBar: React.FC<SearchBarProps> = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector((state) => state.search.response?.results ?? []);

  return (
    <div className={styles.container}>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={styles.searchIcon}
      ></FontAwesomeIcon>
      <div>
        <input
          type="text"
          onInput={(e) => {
            dispatch(actions.search({ text: e.currentTarget.value }));
          }}
          className={styles.input}
        ></input>
        {list.length > 0 ? (
          <div className={styles.dropdownContainer}>
            <Dropdown
              list={list}
              onSelectedItem={() => dispatch(actions.reset())}
            ></Dropdown>
          </div>
        ) : null}
      </div>
    </div>
  );
};

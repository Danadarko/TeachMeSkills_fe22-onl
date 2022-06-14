import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as PressedBookmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./Bookmark.module.css";

type BookmarkProps = {
  onClick: () => void;
  marked: boolean | null;
};
const BookMark: React.FC<BookmarkProps> = ({ onClick, marked }) => {
  const BookmarkIcon = (
    <FontAwesomeIcon
      icon={faBookmark}
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
      role="button"
      className={styles.icon}
    />
  );
  const PressedBookmarkIcon = (
    <FontAwesomeIcon
      icon={PressedBookmark}
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
      role="button"
      className={styles.icon}
    />
  );
  return <>{marked === true ? PressedBookmarkIcon : BookmarkIcon}</>;
};
export default BookMark;

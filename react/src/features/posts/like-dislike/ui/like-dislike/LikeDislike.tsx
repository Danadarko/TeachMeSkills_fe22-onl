import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as pressedLike } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import styles from "./LikeDislike.module.css";
import { faThumbsDown as pressedDislike } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons";

type LikeDislikeProps = {
  onLikeClick: () => void;
  onDislikeClick: () => void;
  currentState: "like" | "dislike" | null;
  count: number;
};

const LikeDislike: React.FC<LikeDislikeProps> = ({
  onDislikeClick,
  onLikeClick,
  currentState,
  count,
}) => {
  const LikeIcon = <FontAwesomeIcon icon={faThumbsUp} />;
  const PressedLikeIcon = <FontAwesomeIcon icon={pressedLike} />;

  const DislikeIcon = <FontAwesomeIcon icon={faThumbsDown} />;
  const PressedDislikeIcon = <FontAwesomeIcon icon={pressedDislike} />;

  return (
    <div className={styles.wrapper}>
      <div>
        {currentState === "like" ? PressedLikeIcon : LikeIcon}
        <div className={styles.count}>{count > 0 ? count : null}</div>
      </div>
      <div>
        {currentState === "dislike" ? PressedDislikeIcon : DislikeIcon}
        <div className={styles.count}>{count < 0 ? count : null}</div>
      </div>
    </div>
  );
};

export default LikeDislike;

import Button from "../button/Button";
import styles from "./PostCard.module.css";

type PostCardProps = {
  id: string | number;
  image?: string | undefined;
  text: string;
  date: string;
  lesson_num?: number;
  title: string;
  author?: number;
  onPreviewClick?: (id: string | number) => void;
  LikeDislike?: React.ComponentType<{ id: string | number }>;
  Bookmark?: React.ComponentType<{ id: string | number }>;
};

const PostCard: React.FC<PostCardProps> = ({
  id,
  image = "https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_1920,c_limit/phonepicutres-TA.jpg",
  text,
  date,
  lesson_num,
  title,
  author,
  onPreviewClick,
  LikeDislike,
  Bookmark,
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={image} alt={`postpicture${id}`} className={styles.img} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
      <div className={styles.flexBlock}>
        <p className={styles.date}>{new Date(date).toLocaleDateString()}</p>
        {/*<LikeDislike
          onLikeClick={() => {}}
          onDislikeClick={() => {}}
          count={-39}
          currentState={"like"}
  ></LikeDislike>*/}
        {LikeDislike ? <LikeDislike id={id} /> : null}
      </div>
      <div className={styles.flexBlock}>
        <Button
          onClick={(event) => {
            onPreviewClick?.(id);
            event.preventDefault();
          }}
          className={`${styles.btn}`}
        >
          Preview
        </Button>
        {Bookmark ? <Bookmark id={id} /> : null}
        {/*<BookMark onClick={() => {}} marked={false} />*/}
      </div>
    </article>
  );
};
export default PostCard;

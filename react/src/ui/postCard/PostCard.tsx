import { Link } from "react-router-dom";
import PostsLikeDislike from "../../features/posts/like-dislike/posts-like-dislike";
import LikeDislike from "../../features/posts/like-dislike/ui/like-dislike/LikeDislike";
import PostsMarkedUnmarked from "../../features/posts/marked-posts/posts-marked-unmarked";
import { AppPages } from "../../types";
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
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={image} alt={title} className={styles.img} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text.substring(0, 100)}</p>
      <div className={styles.flexBlock}>
        <p className={styles.date}>{new Date(date).toLocaleDateString()}</p>

        <PostsLikeDislike id={id} />
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
        <PostsMarkedUnmarked id={id} />
        <Link
          to={`${AppPages.All_POSTS}/${id}`}
          className={styles.link}
        >
          <Button role="presentation">View post</Button>
        </Link>
      </div>
    </article>
  );
};
export default PostCard;

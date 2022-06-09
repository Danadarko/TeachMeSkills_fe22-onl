import styles from "./PostCard.module.css";

type PostCardProps = {
  id: number;
  image?: string;
  text: string;
  date: string;
  lesson_num?: number;
  title: string;
  author?: number;
};

const PostCard: React.FC<PostCardProps> = ({
  id,
  image = "../../assets/default_background.jpg",
  text,
  date,
  lesson_num,
  title,
  author,
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={image} alt={text} className={styles.img} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
      <p className={styles.date}>{new Date(date).toLocaleDateString()}</p>
    </article>
  );
};
export default PostCard;

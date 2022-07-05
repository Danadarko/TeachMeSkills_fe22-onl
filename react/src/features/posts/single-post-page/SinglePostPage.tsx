import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../hooks";
import ContentTemplate from "../../../templates/content/ContentTemplate";
import styles from "./SinglePostPage.module.css";

type SinglePostPageProps = {};
const SinglePostPage: React.FC<SinglePostPageProps> = () => {
  const params = useParams();
  const { posts } = useAppSelector((state) => state.postList);

  const post = posts.find((post) => post.id === Number(params.postId));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <ContentTemplate title={post.title}>
      <article className={styles.post}>
        <div className={styles.image}>
          <img
            src={post.image}
            alt={`postpicture${post.id}`}
            className={styles.pic}
          />
        </div>

        <p className={styles.text}>{post.text} </p>
      </article>
    </ContentTemplate>
  );
};
export default SinglePostPage;

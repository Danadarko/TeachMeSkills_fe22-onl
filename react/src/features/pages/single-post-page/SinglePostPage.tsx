import { useParams } from "react-router-dom";
import Header from "../../../components/header/Header";
import { useAppSelector } from "../../../hooks";
import ContentTemplate from "../../../templates/content/ContentTemplate";
import PostsLikeDislike from "../../posts/like-dislike/posts-like-dislike";
import PostsMarkedUnmarked from "../../posts/marked-posts/posts-marked-unmarked";
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
    <>
      <Header></Header>
      <ContentTemplate title={post.title}>
        <article className={styles.post}>
          <div className={styles.image}>
            <img src={post.image} alt={post.title} className={styles.pic} />
          </div>
          <div>
            <p className={styles.text}>{post.text} </p>
            <div>
              <PostsLikeDislike id={post.id} />
              <PostsMarkedUnmarked id={post.id} />
            </div>
          </div>
        </article>
      </ContentTemplate>
    </>
  );
};
export default SinglePostPage;

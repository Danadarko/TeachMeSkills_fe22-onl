import PostsList, { Post } from "../../../components/postsList/PostsList";
import Button from "../../../ui/button/Button";
import styles from "../../../components/postsList/PostsList.module.css";
import { setSelectedPost } from "../../posts/selectedPostSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import PostCard from "../../../components/postCard/PostCard";
import { useEffect, useState } from "react";

type MyPostsPageProps = {};

const MyPostsPage: React.FC<MyPostsPageProps> = () => {
  const selectedPostId = useAppSelector((state) => state.selectedPost.id);
  const [items, setItems] = useState<Post[]>([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        "https://studapi.teachmeskills.by/blog/posts/?limit=10"
      );
      const { results } = await data.json();
      setItems(results);
    }
    fetchData();
  }, []);
  const selectedPost =
    selectedPostId != null
      ? items.find((item) => item.id === selectedPostId)
      : null;
  const dispatch = useAppDispatch();
  console.log(selectedPostId);
  return (
    <section className={styles.landing}>
      {selectedPostId != null ? (
        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            {selectedPost ? <PostCard {...selectedPost} /> : null}
          </div>
        </div>
      ) : null}

      <div className="container">
        <div className={styles.group}>
          <h2 className={styles.title}>My posts</h2>
          <div className={styles.btnContainer}>
            <Button>+ Add</Button>
          </div>
        </div>
        <PostsList onPreviewClick={(id) => dispatch(setSelectedPost(id))} />
      </div>
    </section>
  );
};

export default MyPostsPage;

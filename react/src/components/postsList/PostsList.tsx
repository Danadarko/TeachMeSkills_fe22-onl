import React, { useEffect, useState } from "react";
import Button from "../../ui/button/Button";
import PostCard from "../postCard/PostCard";
import styles from "./PostsList.module.css";

export type Post = {
  id: number;
  image?: string;
  text: string;
  date: string;
  lesson_num?: number;
  title: string;
  author?: number;
};
type PostsListProps = {};

const PostsList: React.FC<PostsListProps> = () => {
  const [items, setItems] = useState<Post[]>([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        "https://studapi.teachmeskills.by/blog/posts/?limit=20"
      );
      const { results } = await data.json();
      setItems(results);
    }
    fetchData();
  }, []);

  return (
    <section className={styles.landing}>
      <div className="container">
        <div className={styles.group}>
          <h2 className={styles.title}>My posts</h2>
          <div className={styles.btnContainer}>
            <Button>+ Add</Button>
          </div>
        </div>

        <div className={styles.list}>
          {items.map((item) => (
            <PostCard {...item} key={item.id} /> // image={item.image}
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostsList;

import React, { useEffect, useState } from "react";
import PostCard from "../postCard/PostCard";
import styles from "./PostsList.module.css";

export type Post = {
  id: string | number;
  image?: string | undefined;
  text: string;
  date: string;
  lesson_num?: number;
  title: string;
  author?: number;
};
type PostsListProps = { onPreviewClick?: (id: string | number) => void };

const PostsList: React.FC<PostsListProps> = ({ onPreviewClick }) => {
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

  return (
    <section>
      <div className={styles.list}>
        {items.map((item) => (
          <PostCard {...item} key={item.id} onPreviewClick={onPreviewClick} />
        ))}
      </div>
    </section>
  );
};

export default PostsList;

import React from "react";

import { Post } from "../../types/post";
import PostCard from "../postCard/PostCard";
import styles from "./PostsList.module.css";

type PostsListProps = {
  onPreviewClick?: (id: string | number) => void;
  posts: Post[];
};

const PostsList: React.FC<PostsListProps> = ({ onPreviewClick, posts }) => {
  return (
    <section>
      <div className={styles.list}>
        {posts.map((post) => (
          <>
            <PostCard
              {...post}
              key={post.id}
              lesson_num={post.lesson_num}
              onPreviewClick={onPreviewClick}
            />
          </>
        ))}
      </div>
    </section>
  );
};

export default PostsList;

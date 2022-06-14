import { useEffect, useState } from "react";
import PostsList, { Post } from "../../../ui/postsList/PostsList";

import PostsLikeDislike from "../like-dislike/posts-like-dislike";
import PostsMarkedUnmarked from "../marked-posts/posts-marked-unmarked";

type PostsCardListProps = {
  onPreviewClick?: (id: string | number) => void;
  LikeDislike?: React.ComponentType<{ id: string | number }>;
  Bookmark?: React.ComponentType<{ id: string | number }>;
};

const PostsCardList: React.FC<PostsCardListProps> = ({
  onPreviewClick,
  LikeDislike,
  Bookmark,
}) => {
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
    <PostsList
      onPreviewClick={onPreviewClick}
      LikeDislike={PostsLikeDislike}
      Bookmark={PostsMarkedUnmarked}
    />
  );
};
export default PostsCardList;

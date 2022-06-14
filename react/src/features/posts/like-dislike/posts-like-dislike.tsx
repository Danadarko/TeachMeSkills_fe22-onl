import React from "react";
import LikeDislike from "./ui/like-dislike/LikeDislike";
import { setState } from "./likeDislikeSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks";


type PostsLikeDislikeProps = {
  id: string | number;
};

const PostsLikeDislike: React.FC<PostsLikeDislikeProps> = ({ id }) => {
  const { count, state } = useAppSelector(
    (state) => state.likeDislike[id] ?? { count: 0, state: null }
  );
  const dispatch = useAppDispatch();
  const onLikeClick = () => {
    if (state !== "like") {
      dispatch(setState({ id, state: "like" }));
    }
  };
  const onDislikeClick = () => {
    if (state !== "dislike") {
      dispatch(setState({ id, state: "dislike" }));
    }
  };
  return (
    <LikeDislike
      onLikeClick={() => onLikeClick()}
      onDislikeClick={() => onDislikeClick()}
      count={count}
      currentState={state}
    ></LikeDislike>
  );
};

export default PostsLikeDislike;

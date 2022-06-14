import React from "react";
import { setMarkedPost } from "./markedPostSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import BookMark from "./BookMark";

type PostsMarkedUnmarkedProps = {
  id: string | number;
};

const PostsMarkedUnmarked: React.FC<PostsMarkedUnmarkedProps> = ({ id }) => {
  const { state } = useAppSelector(
    (state) => state.markedPost[id] ?? { state: false }
  );
  const dispatch = useAppDispatch();

  return (
    <BookMark
      onClick={() => dispatch(setMarkedPost({ id, state: !state }))}
      marked={state}
    />
  );
};

export default PostsMarkedUnmarked;

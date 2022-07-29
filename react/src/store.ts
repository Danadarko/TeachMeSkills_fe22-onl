import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import selectedPostReducer from "./features/posts/selectedPostSlice";
import likeDislikeReducer from "./features/posts/like-dislike/likeDislikeSlice";
import { rootSaga } from "./sagas";
import markedPostReducer from "./features/posts/marked-posts/markedPostSlice";
import authReducer from "./features/auth/authSlice";
import postListReducer from "./features/posts/posts-card-list/postListSlice";
import userReducer from "./features/user/userSlice";
import searchReducer from "./features/search";
import addPostReducer from "./features/posts/add-post";
import myPostListReducer from "./features/posts/my-posts";
import sortedPostListReducer from "./features/posts/posts-card-list/sorted-post-list";

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    selectedPost: selectedPostReducer,
    likeDislike: likeDislikeReducer,
    markedPost: markedPostReducer,
    auth: authReducer,
    postList: postListReducer,
    sortedPostList: sortedPostListReducer,
    user: userReducer,
    search: searchReducer,
    addPost: addPostReducer,
    myPostList: myPostListReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

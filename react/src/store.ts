import createSagaMiddleware from "redux-saga";
import { compose, configureStore } from "@reduxjs/toolkit";
import selectedPostReducer from "./features/posts/selectedPostSlice";
import likeDislikeReducer from "./features/posts/like-dislike/likeDislikeSlice";
import { rootSaga } from "./sagas";
import markedPostReducer from "./features/posts/marked-posts/markedPostSlice";
import authReducer from "./features/auth/authSlice";
import postListReducer from "./features/posts/posts-card-list/postListSlice";

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const composeEnhancers =
  (typeof window !== "undefined" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
export const store = configureStore({
  reducer: {
    selectedPost: selectedPostReducer,
    likeDislike: likeDislikeReducer,
    markedPost: markedPostReducer,
    auth: authReducer,
    postList: postListReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import createSagaMiddleware from 'redux-saga'
import { configureStore } from "@reduxjs/toolkit";
import selectedPostReducer from "./features/posts/selectedPostSlice";
import likeDislikeReducer from './features/posts/like-dislike/likeDislikeSlice'
import { rootSaga } from './sagas';
import markedPostReducer from './features/posts/marked-posts/markedPostSlice';

let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export const store = configureStore({
    reducer: {
      selectedPost: selectedPostReducer,     
      likeDislike: likeDislikeReducer, 
      markedPost: markedPostReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
  });
  sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


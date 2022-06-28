import Button from "../../../ui/button/Button";
import styles from "../../../ui/postsList/PostsList.module.css";
import { setSelectedPost } from "../../posts/selectedPostSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import PostCard from "../../../ui/postCard/PostCard";
import Header from "../../../components/header/Header";
import { useEffect, useState } from "react";
import { getPostsFetch } from "../../posts/posts-card-list/postListSlice";
import PostsList, { Post } from "../../../ui/postsList/PostsList";
import TabList from "../../../ui/tabsList/TabList";
import { TabEnum } from "../../../types";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrossIcon } from "../../../assets/cross-icon.svg";

type MyPostsPageProps = {};

const TABS_LIST = Object.values(TabEnum);

const MyPostsPage: React.FC<MyPostsPageProps> = () => {
  const selectedPostId = useAppSelector((state) => state.selectedPost.id);
  const myFavourites = useAppSelector((state) => state.markedPost);
  const posts = useAppSelector((state) => state.postList.posts);
  const myLikesDislikes = useAppSelector((state) => state.likeDislike);
  const [activeTab, setActiveTab] = useState(TabEnum.All);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostsFetch());
  }, [dispatch]);

  const selectedPost =
    selectedPostId != null
      ? posts.find((post) => post.id === selectedPostId)
      : null;

  const filterPostsByFavourite = (post: Post) => myFavourites[post.id];
  const filterPostsByLiked = (post: Post) =>
    myLikesDislikes[post.id]?.state === "like";

  {
    /*const getActiveTabFilter = (
    activeTab: TabEnum
  ): ((post: Post) => boolean) => {
    switch (activeTab) {
      case TabEnum.All:
        return filterPostsForAll;
      case TabEnum.MyFavourites:
        return filterPostsByFavourite;
      case TabEnum.Popular:
        return filterPostsByLiked;
    }
  };*/
  }
  const getActiveTabPosts = (activeTab: TabEnum, posts: Post[]): Post[] => {
    switch (activeTab) {
      case TabEnum.All:
        return posts;
      case TabEnum.MyFavourites:
        return posts.filter(filterPostsByFavourite);
      case TabEnum.Popular:
        return posts.filter(filterPostsByLiked);
    }
  };

  return (
    <section className={styles.landing}>
      {!selectedPost ? <Header /> : null}
      {selectedPostId != null ? (
        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            <div className={styles.crossIcon}>
              <CrossIcon />
            </div>
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
        <TabList
          tabs={TABS_LIST}
          activeTab={activeTab}
          onTabClick={setActiveTab}
        />

        <PostsList
          onPreviewClick={(id) => dispatch(setSelectedPost(id))}
          posts={getActiveTabPosts(activeTab, posts)}
        />
      </div>
      <Outlet />
    </section>
  );
};

export default MyPostsPage;

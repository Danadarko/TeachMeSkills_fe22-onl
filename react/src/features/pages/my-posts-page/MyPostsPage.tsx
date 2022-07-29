import Button from "../../../ui/button/Button";
import styles from "../../../ui/postsList/PostsList.module.css";
import { setSelectedPost } from "../../posts/selectedPostSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import PostCard from "../../../ui/postCard/PostCard";
import Header from "../../../components/header/Header";
import { useEffect, useState } from "react";
import PostsList from "../../../ui/postsList/PostsList";
import TabList from "../../../ui/tabsList/TabList";
import { AppPages, TabEnum } from "../../../types";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrossIcon } from "../../../assets/cross-icon.svg";
import { Post } from "../../../types/post";
import { actions } from "../../posts/my-posts/myPostListSlice";

type MyPostsPageProps = {};

const TABS_LIST = Object.values(TabEnum);

const MyPostsPage: React.FC<MyPostsPageProps> = () => {
  const selectedPostId = useAppSelector((state) => state.selectedPost.id);
  const myFavourites = useAppSelector((state) => state.markedPost);
  const myPosts = useAppSelector((state) => state.myPostList.myPosts);
  const myLikesDislikes = useAppSelector((state) => state.likeDislike);
  const [activeTab, setActiveTab] = useState(TabEnum.All);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.getMyPostsFetch());
  }, [dispatch]);

  const selectedPost =
    selectedPostId != null
      ? myPosts.find((post) => post.id === selectedPostId)
      : null;

  const filterPostsByFavourite = (post: Post) => myFavourites[post.id];
  const filterPostsByLiked = (post: Post) =>
    myLikesDislikes[post.id]?.state === "like";

  const getActiveTabPosts = (activeTab: TabEnum, myPosts: Post[]): Post[] => {
    switch (activeTab) {
      case TabEnum.All:
        return myPosts;
      case TabEnum.MyFavourites:
        return myPosts.filter(filterPostsByFavourite);
      case TabEnum.Popular:
        return myPosts.filter(filterPostsByLiked);
    }
  };

  return (
    <section className={styles.landing}>
      {!selectedPost ? <Header /> : null}
      {selectedPostId != null ? (
        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            <div
              className={styles.crossIcon}
              onClick={() => dispatch(setSelectedPost(null))}
            >
              <CrossIcon />
            </div>
            {selectedPost ? <PostCard {...selectedPost} /> : null}
          </div>
        </div>
      ) : null}

      <div className="container">
        <div className={styles.group}>
          <h2 className={styles.title}>My posts</h2>
          <Link to={AppPages.ADD_POST_PAGE} className={styles.link}>
            <Button role="presentation">+ Add</Button>
          </Link>
        </div>
        <TabList
          tabs={TABS_LIST}
          activeTab={activeTab}
          onTabClick={setActiveTab}
        />

        <PostsList
          onPreviewClick={(id) => dispatch(setSelectedPost(id))}
          posts={getActiveTabPosts(activeTab, myPosts)}
        />
      </div>
      <Outlet />
    </section>
  );
};

export default MyPostsPage;

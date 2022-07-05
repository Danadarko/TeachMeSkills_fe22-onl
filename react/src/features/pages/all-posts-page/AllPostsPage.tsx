import Button from "../../../ui/button/Button";
import styles from "../../../ui/postsList/PostsList.module.css";
import { setSelectedPost } from "../../posts/selectedPostSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import PostCard from "../../../ui/postCard/PostCard";
import Header from "../../../components/header/Header";
import { useEffect, useState } from "react";
import { actions } from "../../posts/posts-card-list/postListSlice";
import PostsList from "../../../ui/postsList/PostsList";
import TabList from "../../../ui/tabsList/TabList";
import { AppPages, TabEnum } from "../../../types";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrossIcon } from "../../../assets/cross-icon.svg";
import { Post } from "../../../types/post";
import { SortEnum } from "./SortEnum";
import RadioButtonList from "../../../ui/inputs/radio/radioList/RadioButtonList";

type AllPostsPageProps = {};

const TABS_LIST = Object.values(TabEnum);

const AllPostsPage: React.FC<AllPostsPageProps> = () => {
  const selectedPostId = useAppSelector((state) => state.selectedPost.id);
  const myFavourites = useAppSelector((state) => state.markedPost);
  const posts = useAppSelector((state) => state.postList.posts);
  const myLikesDislikes = useAppSelector((state) => state.likeDislike);
  const [activeTab, setActiveTab] = useState(TabEnum.All);
  const [checkedButton, setCheckedButton] = useState(SortEnum.Text);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.getPostsFetch());
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

  const SORT_RADIO = Object.values(SortEnum);
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
          <h2 className={styles.title}>All posts</h2>
          <Link to={AppPages.ADD_POST_PAGE} className={styles.link}>
            <Button role="presentation">+ Add</Button>
          </Link>
        </div>
        <TabList
          tabs={TABS_LIST}
          activeTab={activeTab}
          onTabClick={setActiveTab}
        />
        <RadioButtonList
          radioButtons={SORT_RADIO}
          checkedButton={checkedButton}
          onRadioButtonChange={setCheckedButton}
        ></RadioButtonList>

        <PostsList
          onPreviewClick={(id) => dispatch(setSelectedPost(id))}
          posts={getActiveTabPosts(activeTab, posts)}
        />
      </div>
      <Outlet />
    </section>
  );
};

export default AllPostsPage;

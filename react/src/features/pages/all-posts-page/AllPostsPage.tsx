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

  //------------------- Preview feature
  const selectedPost =
    selectedPostId != null
      ? posts.find((post) => post.id === selectedPostId)
      : null;

  //------------------- Filtering posts by tabs categories
  const filterPostsByFavourite = (post: Post) => myFavourites[post.id];
  const filterPostsByLiked = (post: Post) =>
    myLikesDislikes[post.id]?.state === "like";

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

  //------------------- Sorting posts by radio buttons values

  const SORT_RADIO = Object.values(SortEnum);

  const getCheckedRadioButtonPosts = (
    checkedButton: SortEnum,
    posts: Post[]
  ): Post[] => {
    switch (checkedButton) {
      case SortEnum.Text:
        const postsSortedByText = [...posts].sort((a, b) => {
          if (a.text < b.text) {
            return -1;
          } else if (a.text > b.text) {
            return 1;
          }
          return 0;
        });
        return getActiveTabPosts(activeTab, postsSortedByText);
      case SortEnum.Title:
        const postsSortedByTitle = [...posts].sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          } else if (a.title > b.title) {
            return 1;
          }
          return 0;
        });
        return getActiveTabPosts(activeTab, postsSortedByTitle);
      case SortEnum.Lesson_num:
        const postsSortedByLessonNum = [...posts].sort((a, b) => {
          return a.lesson_num - b.lesson_num;
        });
        return getActiveTabPosts(activeTab, postsSortedByLessonNum);
      case SortEnum.Date:
        const postsByDate = [...posts].sort((a, b) =>
          a.date > b.date ? -1 : a.date < b.date ? 1 : 0
        );
        return getActiveTabPosts(activeTab, postsByDate);
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
        <div className={styles.features}>
          <div>
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
          </div>
          <form className={styles.form}>
            <legend className={styles.sortTitle}>Sort by:</legend>
            <RadioButtonList
              radioButtons={SORT_RADIO}
              checkedButton={checkedButton}
              onRadioButtonChange={setCheckedButton}
            ></RadioButtonList>
          </form>
        </div>

        <PostsList
          onPreviewClick={(id) => dispatch(setSelectedPost(id))}
          posts={getCheckedRadioButtonPosts(checkedButton, posts)}
        />
      </div>
      <Outlet />
    </section>
  );
};

export default AllPostsPage;

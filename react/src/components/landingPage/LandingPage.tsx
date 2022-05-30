import Header from "../header/Header";
import PostsList from "../postsList/PostsList";
import LandingContent from "./landingContent/LandingContent";

type LandingPageProps = {};

const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <>
      <Header />
      <LandingContent />
      <PostsList />
    </>
  );
};

export default LandingPage;

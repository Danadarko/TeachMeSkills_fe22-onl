import Header from "../header/Header";
import LandingContent from "./landingContent/LandingContent";

type LandingPageProps = {};

const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <>
      <Header />
      <LandingContent />
    </>
  );
};

export default LandingPage;

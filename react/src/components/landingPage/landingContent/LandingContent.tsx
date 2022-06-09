import Button from "../../../ui/button/Button";
import styles from "./LandingContent.module.css";

type LandingContentProps = {};

const LandingContent: React.FC<LandingContentProps> = () => {
  return (
    <section className={styles.content}>
      <div className="container">
        <h1 className={styles.title}>
          Make your blog <span className={styles.span}>online</span>
        </h1>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime porro
          ex ad rem voluptatum consequatur obcaecati possimus culpa
          exercitationem, incidunt quae modi fuga neque nostrum. Provident iure
          vitae eum maxime!
        </p>
        <div className={styles.btnContainer}>
          <Button>Learn more</Button>
        </div>
      </div>
    </section>
  );
};

export default LandingContent;

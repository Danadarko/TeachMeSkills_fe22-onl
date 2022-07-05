import Title from "../../ui/title/Title";
import styles from "./ContentTemplate.module.css";
type ContentTemplateProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

const ContentTemplate: React.FC<ContentTemplateProps> = ({
  title,
  children,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <Title>{title}</Title>
        <div>{children}</div>
      </div>
    </div>
  );
};
export default ContentTemplate;

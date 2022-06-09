import Title from "../../ui/title/Title";

type ContentTemplateProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

const ContentTemplate: React.FC<ContentTemplateProps> = ({
  title,
  children,
}) => {
  return (
    <div>
      <Title>{title}</Title>
      <div>{children}</div>
    </div>
  );
};
export default ContentTemplate;

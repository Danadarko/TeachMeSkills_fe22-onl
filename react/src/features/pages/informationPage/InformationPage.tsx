import ContentTemplate from "../../../templates/content/ContentTemplate";
import List from "../../../ui/list/List";

type InformationPageProps = {};

const InformationPage: React.FC<InformationPageProps> = ({}) => {
  return (
    <ContentTemplate title="Information">
      <List>
        <li>
          <a href="/">Tab 1</a>
        </li>
        <li>
          <a href="/">Tab 2</a>
        </li>
        <li>
          <a href="/">Tab 3</a>
        </li>
      </List>
    </ContentTemplate>
  );
};
export default InformationPage;

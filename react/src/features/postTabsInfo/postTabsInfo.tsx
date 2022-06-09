/*type PostTabsInfoProps = {
  data: Array<{ id: string | number; text: string }>;
};

const PostTabsInfo: React.FC<PostTabsInfoProps> = ({ data }) => {
  data = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ut quisquam fugiat quaerat laudantium saepe sapiente placeat. Mollitia provident earum culpa quibusdam maxime quod eius quos! Illum doloremque voluptatibus cupiditate?",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ut quisquam fugiat quaerat laudantium saepe sapiente placeat. Mollitia provident earum culpa quibusdam maxime quod eius quos! Illum doloremque voluptatibus cupiditate?",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ut quisquam fugiat quaerat laudantium saepe sapiente placeat. Mollitia provident earum culpa quibusdam maxime quod eius quos! Illum doloremque voluptatibus cupiditate?",
    },
  ];
  const result = data.find((item) => item.id === Button.id);
  return result ? (
    <div>
      <p id={result.id} text={result.text}></p>
    </div>
  ) : null;
};
export default PostTabsInfo;*/

import ContentTemplate from "../../templates/content/ContentTemplate";
import List from "../../ui/list/List";

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

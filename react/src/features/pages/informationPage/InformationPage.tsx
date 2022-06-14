import { useState } from "react";
import ContentTemplate from "../../../templates/content/ContentTemplate";
import Tab from "../../../ui/tab/Tab";
import styles from "./InformationPage.module.css";

type InformationPageProps = {};
const types = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ut quisquam fugiat quaerat laudantium saepe sapiente placeat. Mollitia provident earum culpa quibusdam maxime quod eius quos! Illum doloremque voluptatibus cupiditate?",
  },
  {
    id: 2,
    title: "Redux Terms and Concepts",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ut quisquam fugiat quaerat laudantium saepe sapiente placeat. Mollitia provident earum culpa quibusdam maxime quod eius quos! Illum doloremque voluptatibus cupiditate?icing elit. Quas ut quisquam fugiat quaerat laudantium saepe sapiente placeat. Mollitia provident earum culpa quibusdam maxime quod eius quos! Illum doloremque voluptatibus cupiditate?icing elit. Quas ut quisquam fugiat quaerat laudantium saepe sapiente placeat.Mollitia provident earum culpa quibusdam maxime quod eius quos! Illum doloremque voluptatibus cupiditate?icing elit. Quas ut quisquam fugiat quaerat laudantium saepe sapiente placeat. Mollitia provident earum culpa quibusdam maxime quod eius quos! Illum doloremque voluptatibus cupiditate?",
  },
  {
    id: 3,
    title: "When Should I Use Redux?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ut quisquam fugiat quaerat laudantium saepe sapiente placeat. Mollitia provident earum culpa quibusdam maxime quod eius quos! Illum doloremque voluptatibus cupiditate?",
  },
];
const InformationPage: React.FC<InformationPageProps> = () => {
  const [active, setActive] = useState(types[0]);
  return (
    <ContentTemplate title="Information">
      <div className={styles.tabsGroup}>
        {types.map((type) => (
          <Tab
            key={type.id}
            active={active === type}
            onClick={() => setActive(type)}
          >
            Tab {type.id}
          </Tab>
        ))}
      </div>
      <div className={styles.content}>
        <h2 className={styles.textTitle}> {active.title} </h2>
        <p className={styles.text}>{active.text}</p>
      </div>
    </ContentTemplate>
  );
};
export default InformationPage;

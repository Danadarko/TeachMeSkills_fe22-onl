import { TabEnum } from "../../types";
import Tab from "../tab/Tab";
import styles from "./TabList.module.css";

type TabListProps = {
  tabs: TabEnum[];
  activeTab: TabEnum;
  onTabClick: (selectedTab: TabEnum) => void;
};

const TabList: React.FC<TabListProps> = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className={styles.list}>
      {tabs.map((tab) => (
        <Tab
          key={tab}
          active={activeTab === tab}
          onClick={() => onTabClick(tab)}
        >
          {tab}
        </Tab>
      ))}
    </div>
  );
};
export default TabList;

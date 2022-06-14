type PostTabsInfoProps = {
  data: Array<{ id: string | number; title: string; text: string }>;
};

const PostTabsInfo: React.FC<PostTabsInfoProps> = ({ data }) => {
  data = [
    {
      id: 1,
      title: "Lorem ipsum dolor",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ut quisquam fugiat quaerat laudantium saepe sapiente placeat. Mollitia provident earum culpa quibusdam maxime quod eius quos! Illum doloremque voluptatibus cupiditate?",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ut quisquam fugiat quaerat laudantium saepe sapiente placeat. Mollitia provident earum culpa quibusdam maxime quod eius quos! Illum doloremque voluptatibus cupiditate?",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ut quisquam fugiat quaerat laudantium saepe sapiente placeat. Mollitia provident earum culpa quibusdam maxime quod eius quos! Illum doloremque voluptatibus cupiditate?",
    },
  ];
  /*const result = data.find((item) => item.id === Button.id);
  return result ? (
    <div>
      <p id={result.id} text={result.text}></p>
    </div>
  ) : null;*/
  return <></>;
};
export default PostTabsInfo;

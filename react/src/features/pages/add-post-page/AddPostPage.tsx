import React from "react";
import Header from "../../../components/header/Header";
import ContentTemplate from "../../../templates/content/ContentTemplate";
import { AddPostForm } from "../../posts/add-post";

type AddPostPageProps = {};

const AddPostPage: React.FC<AddPostPageProps> = () => {
  return (
    <>
      <Header></Header>
      <ContentTemplate title={"Add Post"}>
        <AddPostForm></AddPostForm>
      </ContentTemplate>
    </>
  );
};

export default AddPostPage;

import { useEffect, useState } from "react";
import Button from "../../../ui/button/Button";
import styles from "./Form.module.css";
import Input from "../../../ui/inputs/input/Input";
import { Textarea } from "../../../ui/inputs/textarea/Textarea";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { addPost } from "./addPostSlice";
import { useNavigate } from "react-router-dom";
import { AppPages } from "../../../types";

type FormProps = {};

export const Form: React.FC<FormProps> = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [publish, setPublish] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.addPost.post?.id);
  const [step, setStep] = useState<"initial" | "submitted">("initial");
  const navigate = useNavigate();
  useEffect(() => {
    if (step === "submitted" && id != null) {
      navigate(`${AppPages.All_POSTS}/${id}`);
    }
  }, [id, step]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          addPost({
            image: image,
            text: text,
            lesson_num: 0,
            title: title,
          })
        );
        setStep("submitted");
      }}
    >
      <div className={styles.group}>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          title={"Title"}
        />
        <Input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          title={"URL"}
        />
      </div>
      <div className={styles.group}>
        <Input
          type="text"
          value={publish}
          onChange={(e) => setPublish(e.target.value)}
          title={"Publish at"}
        />
        <Input
          type="file"
          onChange={(e) => setImage(e.target.files?.[0] ?? null)}
          title={"Image"}
        />
      </div>
      <div className={styles.group}>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          title={"Description"}
        />
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          title={"Text"}
        />
      </div>

      <div className={styles.btnGroup}>
        <Button
          onClick={() => {
            setTitle("");
            setDescription("");
            setImage(null);
            setPublish("");
            setText("");
            setUrl("");
          }}
        >
          Cancel
        </Button>
        <Button type="submit">Add post</Button>
      </div>
    </form>
  );
};

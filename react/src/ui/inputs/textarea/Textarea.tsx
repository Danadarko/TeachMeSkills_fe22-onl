import inputStyles from "./inputs.module.css";
import textareaStyles from "./textarea.module.css";
type TextareaProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
  title: string;
};

export const Textarea: React.FC<TextareaProps> = ({
  value,
  onChange,
  title,
}) => {
  return (
    <label className={inputStyles.label}>
      <div>{title}</div>
      <textarea
        value={value}
        onChange={onChange}
        className={`${inputStyles.input} ${textareaStyles.textarea}`}
      ></textarea>
    </label>
  );
};

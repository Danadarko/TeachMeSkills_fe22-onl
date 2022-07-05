import { SortEnum } from "../../../../features/pages/all-posts-page/SortEnum";
import RadioButton from "../radio-button/RadioButton";

type RadioButtonListProps = {
  radioButtons: SortEnum[];
  checkedButton: SortEnum;
  onRadioButtonChange: (selectedButton: SortEnum) => void;
};

const RadioButtonList: React.FC<RadioButtonListProps> = ({
  radioButtons,
  onRadioButtonChange,
  checkedButton,
}) => {
  return (
    <div>
      {radioButtons.map((button) => (
        <RadioButton
          onChange={() => onRadioButtonChange(button)}
          value={button}
          key={button}
          checked={checkedButton === button}
        >
          {button}
        </RadioButton>
      ))}
    </div>
  );
};
export default RadioButtonList;

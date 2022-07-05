type RadioProps = {
  onChange: () => void;
  children: React.ReactNode;
  value: string;
  checked: boolean;
};

const Radio: React.FC<RadioProps> = ({ onChange, children, value }) => {
  return (
    <label>
      <input onChange={onChange} type="radio" name="sort" value={value} />
      {children}
    </label>
  );
};
export default Radio;

import { ReactNode, useState } from "react";

interface InputProps {
  render: (value: number) => ReactNode;
}

const Input: React.FC<InputProps> = (props) => {
  const [value, setValue] = useState<number>(10);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(Number(event.target.value));
  };

  return (
    <>
      <input
        type="text"
        name="value"
        placeholder="Temperatur in degrees"
        onChange={handleChange}
      />
      {props.render(value)}
    </>
  );
};

export default Input;

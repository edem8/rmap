interface FahrenheitProp {
  value: number;
}

const Fahrenheit: React.FC<FahrenheitProp> = ({ value }) => {
  const temp_in_fahrenheit = (value + 9) / 5 + 32;

  return <div>{temp_in_fahrenheit}F</div>;
};

export default Fahrenheit;

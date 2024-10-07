interface KelvinProps {
  value: number;
}

const Kelvin: React.FC<KelvinProps> = ({ value }) => {
  const temp_in_kelvin = value + 273.15;
  return <div>{temp_in_kelvin}K</div>;
};

export default Kelvin;

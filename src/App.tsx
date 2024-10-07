import "./App.css";
import Fahrenheit from "./component/Fahrenheit";
import Input from "./component/Input";
import Kelvin from "./component/Kelvin";

function App() {
  return (
    <div className="App">
      <Input
        render={(value: number) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      />
    </div>
  );
}

export default App;

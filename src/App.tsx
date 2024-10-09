import { useRef } from "react";
import "./App.css";
import CustomInput from "./component/CustomInput";

function App() {
  const inputRef = useRef<{ focus: () => void }>(null);

  const handleFocusOnInput = (): void => {
    inputRef.current?.focus();
  };

  return (
    <div className="App">
      <CustomInput ref={inputRef} placeholder={"custom Input"} />
      <button onClick={handleFocusOnInput}>focus on input</button>
    </div>
  );
}

export default App;

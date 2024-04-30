import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App(str) {
  const [value, setValue] = useState(0);
  function handleChange()
  {
    var curr;
    
      curr = value + 1;
      //setValue(value-1);
      //curr = curr - 1;
      //setValue(curr);
    
    
  }
  // setValue(5);
  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {value}</p>
      <button onClick={() => {setValue(value+1)}}>Increment</button>
      <button onClick={() => {setValue(value-1)}}>Decrement</button>
    </div>
  );
}

export default App;

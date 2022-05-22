import { useRef } from "react";
import './App.css';

function App() {
  const a = useRef(0);
  const b = useRef(0);
  window.alert = window.console.log
  const plusaction = () => {
    console.log(a.current.value);
    console.log(b.current.value);
  alert (parseInt(a.current.value) + parseInt(b.current.value));
  };

  const Minusaction = () => {
    console.log(a.current.value);
    console.log(b.current.value);
    alert(parseInt(a.current.value) - parseInt(b.current.value));
  };

  const MultiplyAction = () => {
    console.log(a.current.value);
    console.log(b.current.value);
    alert(parseInt(a.current.value) * parseInt(b.current.value));
  };
  const DivideAction = () => {
    console.log(a.current.value);
    console.log(b.current.value);
   alert (parseInt(a.current.value) / parseInt(b.current.value));
  };
  const ResetAction = () => {
    a.current.value = null
    b.current.value = null
  };
  return (
    <div className="App">
      <header className="App-header">
      <h1> Enter the numbers Down</h1>
      <div>
      <input type="number" ref={a} placeholder="0" />
      <input type="number" ref={b} placeholder="0" />

      </div>
      <div className="margin"><p></p></div>
      <div>
      <button onClick={plusaction}>+</button>
      <button onClick={Minusaction}>-</button>
      <button onClick={MultiplyAction}>*</button>
      <button onClick={DivideAction}>/</button>
      <button onClick={ResetAction}>CE</button>
      </div>
      </header>
    </div>
  );
}

export default App;

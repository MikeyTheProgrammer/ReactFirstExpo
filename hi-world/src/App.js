import { useRef } from "react";

function App() {
  const a = useRef(0);
  const b = useRef(0);

  const plusaction = () => {
    console.log(a.current.value);
    console.log(b.current.value);
    alert(parseInt(a.current.value) + parseInt(b.current.value));
  };

  return (
    <div className="App">
      <header >
      <input type="number" ref={a} />
      <input type="number" ref={b} />
      <button onClick={plusaction}>Result</button>
      </header>
    </div>
  );
}

export default App;
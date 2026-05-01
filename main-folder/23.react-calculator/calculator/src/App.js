import React, { useState } from "react";

function App() {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const add = () => setResult(Number(num1) + Number(num2));
  const sub = () => setResult(num1 - num2);
  const mul = () => setResult(num1 * num2);
  const div = () => setResult(num1 / num2);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <h2>Simple Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        onChange={(e) => setNum1(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Enter second number"
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={add}>Add</button>
      <button onClick={sub}>Subtract</button>
      <button onClick={mul}>Multiply</button>
      <button onClick={div}>Divide</button>

      <h3>Result: {result}</h3>

    </div>
  );
}

export default App;
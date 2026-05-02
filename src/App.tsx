import { useState } from "react";
import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState<number | string>("");

  const calculate = (operation: string) => {
    const num1 = Number(firstNumber);
    const num2 = Number(secondNumber);

    if (firstNumber === "" || secondNumber === "") {
      setResult("Unesite oba broja");
      return;
    }

    if (operation === "+") {
      setResult(num1 + num2);
    } else if (operation === "-") {
      setResult(num1 - num2);
    } else if (operation === "*") {
      setResult(num1 * num2);
    } else if (operation === "/") {
      if (num2 === 0) {
        setResult("Deljenje nulom nije dozvoljeno");
      } else {
        setResult(num1 / num2);
      }
    }
  };

  return (
    <div className="app">
      <div className="calculator">
        <h2>Kalkulator</h2>

        <input
          type="number"
          placeholder="Prvi broj"
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value)}
        />

        <input
          type="number"
          placeholder="Drugi broj"
          value={secondNumber}
          onChange={(e) => setSecondNumber(e.target.value)}
        />

        <div className="buttons">
          <button onClick={() => calculate("+")}>+</button>
          <button onClick={() => calculate("-")}>-</button>
          <button onClick={() => calculate("*")}>×</button>
          <button onClick={() => calculate("/")}>÷</button>
        </div>

        <div className="result">
          <p>Rezultat:</p>
          <strong>{result}</strong>
        </div>
      </div>
    </div>
  );
}

export default App;
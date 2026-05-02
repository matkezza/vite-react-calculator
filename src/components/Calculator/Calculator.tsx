import { useState } from "react";
import { calculate } from "../../services/calculatorService";
import type { CalculationResult, Operation } from "../../types/Calculator";

function Calculator() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleCalculate = (operation: Operation) => {
    const calculationResult = calculate(firstNumber, secondNumber, operation);
    setResult(calculationResult);
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
          <button onClick={() => handleCalculate("+")}>+</button>
          <button onClick={() => handleCalculate("-")}>-</button>
          <button onClick={() => handleCalculate("*")}>×</button>
          <button onClick={() => handleCalculate("/")}>÷</button>
        </div>

        <div className="result">
          <p>Rezultat:</p>

          {result && (
            <strong>
              {result.error ? result.error : result.value}
            </strong>
          )}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
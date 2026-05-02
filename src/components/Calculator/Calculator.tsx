import { useState } from "react";
import { calculate } from "../../services/calculatorService";
import type { CalculationResult, Operation } from "../../types/Calculator";

const operations: { symbol: string; label: string; value: Operation }[] = [
  { symbol: "+", label: "Saberi", value: "+" },
  { symbol: "−", label: "Oduzmi", value: "-" },
  { symbol: "×", label: "Pomnoži", value: "*" },
  { symbol: "÷", label: "Podeli", value: "/" },
];

function Calculator() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleCalculate = (operation: Operation) => {
    const calculationResult = calculate(firstNumber, secondNumber, operation);
    setResult(calculationResult);
  };

  const handleClear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setResult(null);
  };

  return (
    <main className="app">
      <section className="calculator-card">
        <header className="calculator-header">
          <h1>Kalkulator</h1>
        </header>

        <div className="inputs-grid">
          <div className="input-group">
            <label htmlFor="firstNumber">Broj A</label>
            <input
              id="firstNumber"
              type="number"
              placeholder="0"
              value={firstNumber}
              onChange={(e) => setFirstNumber(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="secondNumber">Broj B</label>
            <input
              id="secondNumber"
              type="number"
              placeholder="0"
              value={secondNumber}
              onChange={(e) => setSecondNumber(e.target.value)}
            />
          </div>
        </div>

        <div className="buttons-grid">
          {operations.map((operation) => (
            <button
              key={operation.value}
              className="operation-button"
              onClick={() => handleCalculate(operation.value)}
            >
              <span>{operation.symbol}</span>
              <small>{operation.label}</small>
            </button>
          ))}
        </div>

        <div className={result?.error ? "result-box result-error" : "result-box"}>
          <p>Rezultat</p>
          <strong>
            {result
              ? result.error
                ? result.error
                : result.value
              : "—"}
          </strong>
        </div>

        <button className="reset-button" onClick={handleClear}>
          Resetuj
        </button>
      </section>
    </main>
  );
}

export default Calculator;
import type { Operation, CalculationResult } from "../types/Calculator";

export function calculate(
  firstNumber: string,
  secondNumber: string,
  operation: Operation
): CalculationResult {
  if (firstNumber.trim() === "" || secondNumber.trim() === "") {
    return {
      value: null,
      error: "Unesite oba broja",
    };
  }

  const num1 = Number(firstNumber);
  const num2 = Number(secondNumber);

  if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
    return {
      value: null,
      error: "Unesite validne brojeve",
    };
  }

  switch (operation) {
    case "+":
      return {
        value: num1 + num2,
        error: null,
      };

    case "-":
      return {
        value: num1 - num2,
        error: null,
      };

    case "*":
      return {
        value: num1 * num2,
        error: null,
      };

    case "/":
      if (num2 === 0) {
        return {
          value: null,
          error: "Deljenje nulom nije dozvoljeno",
        };
      }

      return {
        value: num1 / num2,
        error: null,
      };
  }
}
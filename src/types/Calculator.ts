export type Operation = "+" | "-" | "*" | "/";

export interface CalculationResult {
  value: number | null;
  error: string | null;
}
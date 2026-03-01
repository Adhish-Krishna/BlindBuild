import type { Request, Response } from "express";

// 3. Matrix Multiplication
export const matrixMultiplication = (req: Request, res: Response) => {
  const { A, B } = req.body;

  // Error: Invalid input type
  if (!Array.isArray(A) || !Array.isArray(B)) {
    return res.status(400).json({ constraints: "Provide valid matrices A and B as 2D arrays" });
  }

  const rowsA = A.length, colsA = A[0].length;
  const rowsB = B.length, colsB = B[0].length;

  // Error: Dimension mismatch
  if (colsA !== rowsB) {
    return res.status(400).json({
      constraints: "Matrix dimensions do not match for multiplication (columns of A must equal rows of B)"
    });
  }

  const result: number[][] = Array.from({ length: rowsA }, () => Array(colsB).fill(0));

  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colsB; j++) {
      for (let k = 0; k < colsA; k++) {
        result[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  res.json({ message: "Success", output: result });
};

// 4. Nth Root Calculation
export const nthRoot = (req: Request, res: Response) => {
  const { value, n } = req.body;

  // Error: Invalid input types
  if (typeof value !== "number" || typeof n !== "number") {
    return res.status(400).json({ constraints: "Provide both 'value' and 'n' as numbers" });
  }

  // Error: Invalid root (non-positive)
  if (n <= 0) {
    return res.status(400).json({ constraints: "Root 'n' must be a positive integer" });
  }

  // Error: Negative value with even root
  if (value < 0 && n % 2 === 0) {
    return res.status(400).json({ constraints: "Cannot compute even root of a negative number" });
  }

  const result = Math.pow(value, 1 / n);

  res.json({ message: "Success", output: result });
};
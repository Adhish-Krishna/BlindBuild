import type { Request, Response } from "express";

export const MM = (req: Request, res: Response) => {
  const { A, B } = req.body;

  if (!Array.isArray(A) || !Array.isArray(B)) {
    return res.status(400).json({ message: "Error" });
  }

  const rowsA = A.length, colsA = A[0].length;
  const rowsB = B.length, colsB = B[0].length;

  if (colsA !== rowsB) {
    return res.status(400).json({ message: "Error" });
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

export const nthR = (req: Request, res: Response) => {
  const { value, n } = req.body;

  if (typeof value !== "number" || typeof n !== "number") {
    return res.status(400).json({ message: "Error" });
  }

  if (n <= 0) {
    return res.status(400).json({ message: "Error" });
  }

  if (value < 0 && n % 2 === 0) {
    return res.status(400).json({ message: "Error" });
  }

  const result = Math.pow(value, 1 / n);

  res.json({ message: "Success", output: result });
};
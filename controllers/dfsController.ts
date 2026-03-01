import type { Request, Response } from "express";

// 1. DFS Cycle Detection in Directed Graph
export const dfsCycleDetection = (req: Request, res: Response) => {
  const { graph } = req.body;

  // Error: Missing inputs
  if (!graph) {
    return res.status(400).json({ constraints: "Graph required" });
  }

  // Error: Invalid graph structure
  if (typeof graph !== "object" || Array.isArray(graph)) {
    return res.status(400).json({ constraints: "Graph must be an adjacency list object" });
  }

  const visited = new Set<string>();
  const recStack = new Set<string>();

  const dfs = (node: string): boolean => {
    if (!graph[node]) return false;
    if (recStack.has(node)) return true;
    if (visited.has(node)) return false;

    visited.add(node);
    recStack.add(node);

    for (const neighbor of graph[node]) {
      if (dfs(neighbor)) return true;
    }

    recStack.delete(node);
    return false;
  };

  for (const node of Object.keys(graph)) {
    if (dfs(node)) {
      return res.json({ message: "Success", output: true });
    }
  }

  res.json({ message: "Success", output: false });
};

// 2. DFS Shortest Path Length (Unweighted Graph)
export const dfsShortestPathLength = (req: Request, res: Response) => {
  const { graph, start, target } = req.body;

  // Error: Missing inputs
  if (!graph || !start || !target) {
    return res.status(400).json({ constraints: "Graph, start, and target required" });
  }

  // Error: Start/target not in graph
  if (!graph[start] || !graph[target]) {
    return res.status(400).json({ constraints: "Start or target node not found in graph" });
  }

  let minLength = Infinity;
  const visited = new Set<string>();

  const dfs = (node: string, length: number) => {
    if (node === target) {
      minLength = Math.min(minLength, length);
      return;
    }
    visited.add(node);
    for (const neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        dfs(neighbor, length + 1);
      }
    }
    visited.delete(node);
  };

  dfs(start, 0);

  res.json({
    message: "Success",
    output: minLength === Infinity ? -1 : minLength
  });
};
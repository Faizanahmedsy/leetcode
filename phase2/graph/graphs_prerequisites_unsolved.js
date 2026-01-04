/**
 * GRAPH PREREQUISITES – UNSOLVED
 *
 * Graph = Nodes (vertices) + Edges (connections)
 *
 * Think:
 * - Nodes = cities
 * - Edges = roads
 *
 * Common representations:
 * 1. Adjacency List (MOST IMPORTANT for LeetCode)
 *
 * Example:
 * A -- B
 * |    |
 * C -- D
 *
 * Adjacency List:
 * {
 *   A: ["B", "C"],
 *   B: ["A", "D"],
 *   C: ["A", "D"],
 *   D: ["B", "C"]
 * }
 */

/**
 * TASK 1: Create an empty graph using adjacency list
 */

// Notes: Adjacency List =
// 👉 an object
// 👉 keys = nodes
// 👉 values = array of neighbors
function task1() {
  const graph = {};

  // initialize empty graph

  return graph;
}
console.log("Task 1:", task1());

/**
 * TASK 2: Add nodes (vertices) to the graph
 * Example: add nodes A, B, C
 */
function task2() {
  const graph = {};
  graph["A"] = [];
  graph["B"] = [];
  graph["C"] = [];

  // add nodes A, B, C with empty arrays

  return graph;
}
console.log("Task 2:", task2());

/**
 * TASK 3: Add an undirected edge between two nodes
 * Example: A -- B
 */
function task3() {
  const graph = {
    A: [],
    B: [],
  };

  // add edge between A and B

  // connect a to b
  graph["A"].push("B");

  // connect b to a
  graph["B"].push("A");

  return graph;
}
console.log("Task 3:", task3());

/**
 * TASK 4: Add multiple edges
 *
 * Graph:
 * A -- B
 * A -- C
 */
function task4() {
  const graph = {
    A: [],
    B: [],
    C: [],
  };

  // connect A with B and C
  graph["A"].push("B");
  graph["A"].push("C");
  graph["B"].push("A");
  graph["C"].push("A");

  return graph;
}
console.log("Task 4:", task4());

/**
 * TASK 5: Check if a node exists in the graph
 * Example: node = "A"
 */
function task5() {
  const graph = {
    A: ["B"],
    B: ["A"],
  };

  const node = "A";

  // return true if node exists, else false
  return graph.hasOwnProperty(node);
}
console.log("Task 5:", task5());
/**
 * TASK 6: Get all neighbors of a node
 * Example: node = "A" → ["B", "C"]
 */
function task6() {
  const graph = {
    A: ["B", "C"],
    B: ["A"],
    C: ["A"],
  };

  const node = "A";

  // return neighbors of node

  if (!graph.hasOwnProperty(node)) return -1;

  return graph[node];
}
console.log("Task 6:", task6());

/**
 * TASK 7: Count total number of nodes in the graph
 */
function task7() {
  const graph = {
    A: ["B"],
    B: ["A", "C"],
    C: ["B"],
  };

  // return total node count

  // we can also do this
  // let count = 0;
  // for (let node in graph) {
  //   count++;
  // }
  // return count;

  return Object.keys(graph).length;
}
console.log("Task 7:", task7());

/**
 * TASK 8: Count total number of edges in an undirected graph
 *
 * NOTE:
 * Each edge is stored twice in adjacency list.
 */

// Notes: In an undirected graph, every edge is stored TWICE in adjacency list
// So: A—B is stored as:
// A → B
// B → A

// IMP NOTE: Edges in undirected graph = sum of all adjacency list lengths ÷ 2

function task8() {
  const graph = {
    A: ["B", "C"],
    B: ["A"],
    C: ["A"],
  };

  // return total edges count
  let totalConnections = 0;

  for (let node in graph) {
    console.log(node, "node");
    totalConnections += graph[node].length;
  }
  return totalConnections / 2;
}
console.log("Task 8:", task8());

/**
 * TASK 9: Remove an edge between two nodes
 * Example: remove edge A -- B
 */
function task9() {
  const graph = {
    A: ["B", "C"],
    B: ["A"],
    C: ["A"],
  };

  graph["A"] = graph["A"].filter((n) => n !== "B");
  graph["B"] = graph["B"].filter((n) => n !== "A");
  console.log(graph["A"]);
  console.log(graph["B"]);

  // remove connection between A and B

  return graph;
}
console.log("Task 9:", task9());

/**
 * TASK 10: Remove a node completely
 * Example: remove node "A"
 */
function task10() {
  const graph = {
    A: ["B", "C"],
    B: ["A"],
    C: ["A"],
  };

  const nodeToRemove = "A";

  // remove node and all its edges

  return graph;
}
console.log("Task 10:", task10());

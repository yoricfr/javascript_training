
// Robot
//

const roads = [
  "Alice_s House-Bob_s House",   "Alice_s House-Cabin",
  "Alice_s House-Post Office",   "Bob_s House-Town Hall",
  "Daria_s House-Ernie_s House", "Daria_s House-Town Hall",
  "Ernie_s House-Grete_s House", "Grete_s House-Farm",
  "Grete_s House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];


function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

const roadGraph = buildGraph(roads);

console.log(roadGraph);

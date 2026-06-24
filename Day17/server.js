import { createServer } from "http";
const server = createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Server is running" }));
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
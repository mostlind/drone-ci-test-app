import { createServer } from "http";

console.log("starting server")

createServer((req, res) => {
  res.statusCode = 200;
  res.write("hello");
  res.end();
}).listen(8080);

console.log("listening on 8080...");

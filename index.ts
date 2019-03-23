import { createServer } from "http";

createServer((req, res) => {
  res.statusCode = 200;
  res.write("hello");
  res.end();
}).listen(8080);

console.log("listening on 8080...");

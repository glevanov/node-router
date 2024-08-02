# node-router
> A simple helper router function I personally use in my Node.js projects.

## Example usage
```ts
import { createServer } from "node:http";
import { Router } from "node-router";

const router = new Router();

router.addRoute("GET", "/healthcheck", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("OK");
});

const server = createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", config.frontendUrl);
  router.handle(req, res);
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

```

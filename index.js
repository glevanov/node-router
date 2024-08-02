export class Router {
  constructor() {
    this.routes = {};
  }

  addRoute(method, url, handler) {
    this.routes[`${method}:${url}`] = handler;
  }

  handle(req, res) {
    const handler = this.routes[`${req.method}:${req.url}`];
    if (handler) {
      handler(req, res);
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not found");
    }
  }
}

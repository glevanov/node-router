export class Router {
  constructor() {
    this.routes = {};
  }

  addRoute(method, url, handler) {
    const { pathname } = new URL(url, 'http://localhost')

    this.routes[`${method.toLowerCase()}:${pathname}`] = handler;
  }

  handle(req, res) {
    const method = req.method.toLowerCase();

    const parsedUrl = new URL(String(req.url), 'http://localhost');
    const url = parsedUrl.pathname;

    const handler = this.routes[`${method}:${url}`];
    console.log('debug 2, url')
    if (handler) {
      handler(req, res);
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not found");
    }
  }
}

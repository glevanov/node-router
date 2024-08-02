/**
 * A simple Router class to manage routes and their corresponding handlers.
 */
export class Router {
  constructor() {
    /**
     * @type {Object<string, Function>} An object mapping routes to their handlers.
     */
    this.routes = {};
  }

  /**
   * Adds a route with the specified method and URL, and associates it with a handler function.
   *
   * @param {"GET"|"POST"|"PUT"|"DELETE"|"PATCH"|"OPTIONS"|"HEAD"} method - The HTTP method.
   * @param {string} url - The URL path for the route.
   * @param {Function} handler - The function to handle requests to the specified route.
   */
  addRoute(method, url, handler) {
    this.routes[`${method}:${url}`] = handler;
  }

  /**
   * Handles an incoming request by finding the appropriate route handler.
   * If no handler is found, responds with a 404 status code.
   *
   * @param {import('http').IncomingMessage} req - The incoming request object, with properties like `method` and `url`.
   * @param {import('http').ServerResponse} res - The response object used to send a response.
   */
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

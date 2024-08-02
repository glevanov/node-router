type Handler = (
  req: import("http").IncomingMessage,
  res: import("http").ServerResponse,
) => void;

type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";

type HandlerUrl = `/${string}`;

type HandlerKey = `${Method}:${HandlerUrl}`;

/**
 * A simple Router class to manage routes and their corresponding handlers.
 */
export declare class Router {
  /**
   * An object mapping routes to their handlers.
   */
  routes: { [key: string]: Handler };

  constructor();

  /**
   * Adds a route with the specified method and URL, and associates it with a handler function.
   */
  addRoute(method: Method, url: HandlerUrl, handler: Handler): void;

  /**
   * Handles an incoming request by finding the appropriate route handler.
   * If no handler is found, responds with a 404 status code.
   */
  handle(
    req: import("http").IncomingMessage,
    res: import("http").ServerResponse,
  ): void;
}

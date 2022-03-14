import { Router } from "express";
import { IRoute } from "../types";

/**
 * Express makes use of Routers:
 * https://expressjs.com/en/guide/routing.html
 * (ctrl+f "express.Router" for an example of modular routing)
 */
const router = Router();

/**
 * basic usage looks like this:
 * router.get(server path, handler function => {...})
 */

/**
 * defining a route for (http://localhost:{portNumber}/)
 * all handler functions take HTTP request & response objects
 */
router.get("/", (req, res) => {
  //const params = req.params; etc
  res.send("tested");
});

export const TestRouter: IRoute = {
  router: router,
  path: "/test",
};

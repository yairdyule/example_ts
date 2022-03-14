/**
 * if a class/value/function is to be used in another file, you must `export` it.
 *
 * there are two ways to export/reference in modern JS:
 *
 * default exports
 *  (in file.ts): export default function hello() {}...
 *  (another file): import helloFunction from './file.ts' //note that helloFunction can be any name
 *
 * or...
 *
 * named exports
 *  (in file.ts) export function hello() {}...
 *  (another file) import {hello} from ./file.ts //import name must correspond to the exported name
 *
 * use default export for the main function/value/class of the file
 * use named exports for minor/specific things
 */

import express, { Application } from "express"; //importing default & named exports from npm packages
import type { IWare, IRoute, AppOptions } from "./types"; //importing types, defined in `types.d.ts`
import { out } from "./utils"; //importing named utility function

export default class App {
  private instance: Application;
  private port: number;
  private wares: IWare[];
  private routes: IRoute[];

  public constructor(options: AppOptions) {
    this.port = options.port;
    this.wares = options.wares;
    this.routes = options.routes;
    this.instance = express();
    this.initialize();
  }

  private initialize() {
    this.useWares();
    this.useRoutes();
  }

  private useWares() {
    for (const ware of this.wares) {
      this.instance.use(ware.handler);
      out(`${ware.name} middleware applied.`); //string formatting, must use `backticks`
    }
  }

  private useRoutes() {
    for (const route of this.routes) {
      this.instance.use(route.path, route.router);
      out(`${route.path} route applied.`);
    }
  }

  public listen() {
    this.instance.listen(this.port);
    out(`listening on http://localhost:${this.port}`);
  }
}

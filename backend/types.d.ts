import { Router } from "express";

export interface IRoute {
  path: string;
  router: Router;
}

export interface IWare {
  name: string;
  handler: any;
}

export interface AppOptions {
  port: number;
  wares: IWare[];
  routes: IRoute[];
}

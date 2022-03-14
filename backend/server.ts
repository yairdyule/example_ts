import App from "./app";
import { Routes } from "./routes"; //importing routes from routes/index.ts

export const server = new App({
  port: 8000,
  wares: [],
  routes: Routes,
}).listen();

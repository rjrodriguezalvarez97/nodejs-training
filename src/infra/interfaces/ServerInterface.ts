import type { Application } from "express";

export interface ServerInterface {
  init(): void;
  close(): void;
  getApp(): ServerApp;
}

export type ServerApp = Application;

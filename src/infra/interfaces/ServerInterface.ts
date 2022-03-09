import type { Application } from "express";
import type RepositoryInterface from "./RepositoryInterface";

export interface ServerInterface {
  init(): void;
  close(): void;
  getApp(): ServerApp;
  repository: RepositoryInterface;
}

export type ServerApp = Application;

import * as http from "http";
import * as fs from "fs";
import { isIP } from "net";
import { execCommand } from "./executor";
import { Command } from "./command";
import { dialog } from "electron";

export const isPortFree = (port: number) =>
  new Promise((resolve) => {
    const server = http
      .createServer()
      .listen(port, "127.0.0.1", () => {
        server.close();
        resolve(true);
      })
      .on("error", () => {
        resolve(false);
      });
  });

export const killProcess = async (port: number) => {
  await execCommand(
    new Command({
      darwin: `kill -9 $(lsof -t -i :${port})`,
      linux: `kill -9 $(lsof -t -i :${port})`,
      win32: `FOR /F "tokens=5" %i IN ('netstat -aon ^| find "${port}"') DO Taskkill /F /PID %i`,
    }),
  );
};

export const ping = async (addr: string) => {
  if (isIP(addr) === 0) {
    throw new Error(`Invalid IP address: ${addr}`);
  }

  return await execCommand(
    new Command({
      win32: `ping -n 1 ${addr}`,
      darwin: `ping -c 1 ${addr}`,
      linux: `ping -c 1 ${addr}`,
    }),
    { quiet: true },
  );
};

export const netstat = async () => {
  return await execCommand(
    new Command({
      win32: "netstat",
      darwin: "netstat",
      linux: "netstat",
    }),
    { quiet: true },
  );
};

export const ifconfig = async () => {
  return await execCommand(
    new Command({
      win32: "ipconfig /all",
      darwin: "ifconfig",
      linux: "ifconfig",
    }),
    { quiet: true },
  );
};

export const writeFileSync = (_, filePath: string, text: string): void => {
  fs.writeFileSync(filePath, text);
};

export const pickDirectory = async (): Promise<string> => {
  const handler = await dialog.showOpenDialog({
    properties: ["openDirectory"],
  });
  return handler.filePaths[0];
};

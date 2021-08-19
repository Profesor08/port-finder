import { spawnSync } from "child_process";
import portfinder from "portfinder";

export const PortFinder = {
  getPort: (basePort?: number) =>
    new Promise<number>((resolve) => {
      if (basePort !== undefined) {
        portfinder.basePort = parseInt(basePort.toString());
      }

      portfinder.getPort((__, port) => {
        resolve(port);
      });
    }),

  getPortSync: (basePort?: number): number => {
    const args = [require.resolve("./process")];

    if (basePort) {
      args.push("--base-port");
      args.push(basePort.toString());
    }

    const result = spawnSync(process.execPath, args);

    return parseInt(result.stdout.toString());
  },
};

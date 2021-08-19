import parseArgs from "minimist";
import portfinder from "portfinder";

const basePort = parseArgs(process.argv.slice(2))["base-port"];

if (basePort) {
  portfinder.basePort = parseInt(basePort);
}

portfinder.getPort((__, port) => {
  process.stdout.write(`${port}`);

  process.exit(0);
});

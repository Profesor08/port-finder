const { PortFinder } = require("./lib/PortFinder");

console.log("Get sync port: ");
console.log(PortFinder.getPortSync(5000));

console.log("Get async port: ");

(async () => {
  console.log(await PortFinder.getPort(5000));
})();

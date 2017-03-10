var fs = require("fs");
var path = require("path");
var spawn = require("cross-spawn");
var glob = require("glob");

// get packages paths
var packages = glob.sync("./packages/react-atlas*/", { realpath: true });

packages.push(packages.shift());

packages.forEach(function(pack) {
  // ensure path has package.json
  if (!fs.existsSync(path.join(pack, "package.json"))) return;

  spawn.sync("npm", ["run", "build-css"], {
    env: process.env,
    cwd: pack,
    stdio: "inherit"
  });
 });

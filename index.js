const fs = require("fs");
const lockfile = require("@yarnpkg/lockfile");

const args = process.argv.slice(2);
if (args.length >= 1) {
  const pattern = args[0];

  let file = fs.readFileSync("yarn.lock", "utf8");
  let json = lockfile.parse(file).object;

  Object.keys(json).forEach(entry => {
    if (entry.match(new RegExp(pattern, 'gi'))) delete json[entry];
  });

  let fileAgain = lockfile.stringify(json);

  fs.writeFileSync("yarn.lock", fileAgain);
} else {
  console.error('Please type a pattern');
}

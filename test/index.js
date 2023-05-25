const fs = require("fs");
const generateImg = require("../src/index.js");

fs.writeFileSync("./image.png", generateImg(200, 200));

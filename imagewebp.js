/**
 * 图片转换webp格式
 */

const imagemin = require("imagemin-input");
const imageminWebp = require("imagemin-webp");

const dest = "build/webp";

const shell = require("shelljs");
shell.rm("-rf", dest);

imagemin(["src/**/*.{jpg,png}"], dest, {
  log: true,
  use: [
    imageminWebp({
      quality: 75
    })
  ]
});

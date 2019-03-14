/**
 * 图片压缩
 */

const imagemin = require("imagemin-input");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngquant = require("imagemin-pngquant");

const dest = "build/min";

const shell = require("shelljs");
shell.rm("-rf", dest);

imagemin(["src/*.{jpg,png}"], dest, {
  log: true,
  plugins: [
    imageminMozjpeg({
      quality: 70
    }),
    imageminPngquant({
      quality: [0.6, 0.8]
    })
  ]
});

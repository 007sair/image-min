/**
 * 图片压缩
 */

const imagemin = require("imagemin-input");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngquant = require("imagemin-pngquant");
const imageminWebp = require("imagemin-webp");
const shell = require("shelljs");
const argv = require("yargs").argv;

const dest = "build";

shell.rm("-rf", dest);

if (argv.min) {
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
}

if (argv.webp) {
  imagemin(["src/**/*.{jpg,png}"], dest, {
    log: true,
    use: [
      imageminWebp({
        quality: 75
      })
    ]
  });
}

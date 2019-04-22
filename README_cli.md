# imagemin-cli 的使用

## 步骤如下

#### 1、安装 `NodeJS`

二选一的安装方法：

- 通过官网下载安装包：http://nodejs.cn/download/
- 通过 `brew` 安装：https://brew.sh/index_zh-cn

```bash
# 安装 brew
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# 查看安装成功 brew
$ brew -v

# 安装 nodejs
$ brew install node
```

#### 2、安装 `Yarn`

推荐使用 `yarn` ，而不是 `npm` 或 `cnpm`

```bash
$ brew install yarn
```

#### 3、安装 `imagemin-cli`

```bash
# 全局安装 imagemin-cli
$ yarn add global imagemin-cli
```

## 命令行使用

操作完上面步骤后，在终端中输入 `imagemin --help`查看使用方法。

如：需要压缩 `~/Desktop/sair/` 目录下的图片，命令行如下：

```bash
# cd 到指定的目录
$ cd ~/Desktop/sair

# 压缩目录下的图片到 build 目录
$ imagemin images/* --out-dir=build

# 如果想使用 pngquant 插件
$ imagemin --plugin=pngquant images/* --out-dir=build
```

想使用其他插件，只需要输入插件的后缀即可，如，压缩 gif：

```bash
# 压缩 gif 格式
# 需保证已经全局安装了 `imagemin-gifsicle`
$ imagemin --plugin=gifsicle ./* --out-dir=build
```

**注意：插件的使用必须先提前全局安装，否则会报错。**

## 插件的使用

插件可以更好的压缩指定格式的图片，在命令行中使用`--plugin`时调用。

```bash
# 全局安装 imagemin-pngquant
$ yarn add global imagemin-pngquant
```

其他插件：

- `imagemin-pngquant` 压缩 png
- `imagemin-mozjpeg` 压缩 jpeg、jpg
- `imagemin-svgo` 压缩 svg
- `imagemin-gifsicle` 压缩 gif
- `imagemin-webp` 压缩 webp

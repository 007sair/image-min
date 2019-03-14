# 图片压缩

## 使用

```ruby
# 安装依赖
yarn

# 压缩图片
yarn min

# 生成webp
yarn webp
```

## 关于 jpeg 的图片格式

我们使用 photoshop 将一个 jpg 图片 `存储为web所用格式`时，在面板中会出现`连续`和`优化`的选项。

注：`photoShop CC` 版本为 _连续(sequential)_ 和 _优化(progressive)_ ，老版本中为 _基线(baseline)_ 和 _优化_

- **基线**指的是图片会从最上方开始，以8×8方块为单位（这就是JPG压缩时的单位），下载完哪些就显示哪些，网速慢的时候会看的图片从上到下逐渐显示，未下载的部分是空白的。
- **优化**方式则是先下载一张清晰度低的图像，然后逐渐使图像变得清晰，这会增加图像文件体积，但是相比较来说，由于人类大脑对于图像有很可怕的处理能力，在相同的时间内，这种方式显示的图像更容易让人看出其中的内容——即使没有下载完整，但是整张图的轮廓是完整的。

可以通过[命令行工具](https://www.npmjs.com/package/is-progressive-cli)检查 JPEG 图像是否是渐进式的。

这里有介绍过使用渐进式 JPEG 的[优点](https://images.guide/#the-advantages-of-progressive-jpegs)和[缺点](https://images.guide/#the-disadvantages-of-progressive-jpegs)。

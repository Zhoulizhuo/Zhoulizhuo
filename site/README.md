# SOLAERA · 十里阳光

英文品牌站，产品线是铝合金旅行推车、伞车和儿童平衡车。中英切换在页头右上角。

品牌名 `SOLAERA / 十里阳光`、电话与邮箱统一写在 `src/content.ts` 的 `brand` 里。

## 联络方式与询盘说明

- 官方邮箱：`zhoulizhuo182@gmail.com`
- 电话 / 微信 / WhatsApp：`+86 189 8646 0955`
- 询盘接收方式：
  1. **方案 A（无需后端即用）**：填写表单后自动生成规范询盘文本并调起本地邮箱客户端；同时在页面展示完整草稿并支持「一键复制」，方便买家直接发 WhatsApp / 微信 / 邮件。
  2. **方案 B（免费自动转发到 Gmail）**：在 [Formspree](https://formspree.io/) 免费注册一个表单填入 `brand.formspreeEndpoint`（如 `https://formspree.io/f/xvgzyab`），买家点击发送即静默直达你的 Gmail 邮箱，无需维护服务器。

图片是原创概念照片，用来先把版式立住。量产样品拍好后，替换 `public/images/` 里的同名文件即可。没有使用阿里巴巴或其他电商店铺的产品图。

## 本地预览

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
npm run preview
```

## 部署

`dist/` 是静态文件。Vercel 会读取 `vercel.json` 的单页路由。Netlify 会读取 `public/_redirects`。

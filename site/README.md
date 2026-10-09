# Aerly

英文品牌站，产品线是铝合金旅行推车、伞车和儿童平衡车。中英切换在页头。

品牌名 `Aerly / 艾黎` 写在 `src/content.ts` 的 `brand` 里，换公司名只改这一处。询盘邮件收件人同样在那里。

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

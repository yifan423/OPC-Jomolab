# Jomolab Web

Jomolab 中文 AI-OPC 生态官网，包含四个设计服务分类页与 OPC 学习中心。

部署仓库只包含网站运行所需的代码、字体和优化后的公开素材。参考资料、品牌源文件与学习中心原始文档保留在项目所有者本地，不进入版本库。

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

Node.js 需要 `20.9.0` 或以上版本。

## Validation

```bash
pnpm typecheck
pnpm lint
pnpm build
pnpm test:e2e
```

## Content and assets

- Product requirements: `docs/PRD.md`
- Typed site content: `src/content/site.ts`
- Third-party asset notes: `THIRD_PARTY_ASSETS.md`
- Generated visual assets: `public/images/generated`
- Learning-center document imagery: `public/images/learning`
- Self-hosted font weights used by the site: `src/fonts`

V1 contact submissions are intentionally local-only and are not sent or saved.

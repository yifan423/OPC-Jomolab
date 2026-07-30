# Third-party assets

## Fonts

- HarmonyOS Sans SC: project-owner supplied font files, self-hosted through `next/font/local` for Chinese body copy and fallbacks.
- LINE Seed TW: project-owner supplied font files, self-hosted through `next/font/local` for English labels and numerals.
- Douyin Sans Bold: project-owner supplied font file, self-hosted through `next/font/local` for selected display headings.

The source packages remain in the project-owner asset directory. Only the weights used by the website are copied into `src/fonts`.

## Product names and links

- WorkBuddy: https://www.workbuddy.cn/
- 千问办公: https://qwenwork.cn/
- 秒悟 Meoo: https://meoo.com/

## Product card covers and logos

The homepage product cards use promotional assets served by each product's official website. They are locally cached to prevent layout shifts and third-party hotlink failures. The images are shown as product references and do not state that the products endorse or sponsor Jomolab.

- WorkBuddy cover: official expert-team product interface poster from `https://acc-1258344699.cos.accelerate.myqcloud.com/web/website/0dfab9e6a1a64937e8a6bb2a711d5f8dc9646d79/assets/expert-team-intro-poster-BzHm1ceG.png`. Logo icon: official WorkBuddy site icon from `https://download.codebuddy.cn/web/website/0bebf86e38e7d71ff0c313d661e7753ff996c54e/assets/logo.svg`.
- 千问办公 cover: official full product-workspace SVG from `https://img.alicdn.com/imgextra/i3/O1CN01CtYCzP1hvJgX6GaPv_!!6000000004339-55-tps-1440-900.svg`. Logo: official wordmark from `https://img.alicdn.com/imgextra/i2/O1CN01j5Zn121gj7WSX4g7x_!!6000000004177-55-tps-540-120.svg`.
- 秒悟 Meoo cover: official homepage showcase image from `https://img.alicdn.com/imgextra/i2/O1CN01ui7JMb1ynOITp0fmE_!!6000000006623-2-tps-2880-1600.png`. Logo icon: official site icon from `https://gw.alicdn.com/imgextra/i4/O1CN01MxUXzS1xYRjMwA2la_!!6000000006455-2-tps-184-184.png`.
- 算力合作席位 is a text-only Jomolab placeholder card. It uses no third-party image or logo because no partner has been confirmed.

Before production release, confirm that each third-party brand permits redistributing these cached promotional assets in this placement.

## Ecosystem logo rail

The homepage rail presents relevant ecosystem platforms and tools. It is a visual reference wall, not a claim that the listed brands have signed, endorsed, sponsored, or partnered with Jomolab.

The current rail assets were supplied by the project owner and include Alibaba, Alibaba Cloud, Tmall, Tmall Global, Taobao, 1688, Qwen, AliMama, Lingyang, Youku, Fliggy, Bilibili, UnionPay, Lazada, Tuhu, Ecovacs, Panasonic, CATL, Guming, Wanda Plaza, XDF and Wuhan Zhongbai.

Whitespace was removed from the supplied raster canvases without redrawing the marks. All marks retain their original proportions and colors. CSS applies a bounded visual height, and the two rows move in opposite directions. Confirm redistribution permission for every mark before public production release.

## Brand and generated imagery

- Jomolab normal and reversed logos: derived without redesign from the project-owner files in `logo/394.png` and `logo/反白.png`. Transparent clear space was trimmed for responsive web use.
- Hero, service covers, learning banner and contact background: original images generated specifically for this project with OpenAI ImageGen. The current Hero uses a symmetrical pure sky-and-cloud composition with no text, UI or geometric overlays.
- Generated imagery contains no third-party marks, text, UI screenshots or identifiable people.
- Learning detail imagery: extracted from project-owner DOCX materials. Only venue, workspace and project-board images were selected. Recommendation letters, certificates, identity-bearing proof files and identifiable group portraits were excluded.

## Content policy

Names of unverified signed partners, OPC members, universities and students are intentionally replaced with neutral placeholders. Ecosystem logos are not described as partners. Personal certificates and recommendation letters are not published in V1.

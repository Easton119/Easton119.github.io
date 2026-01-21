# Copilot 使用说明（针对本仓库的 AI 代码/内容助手）

目的：让 AI 代理快速上手此 VuePress 网站仓库，理解关键约定、构建/预览流程、常见文件位置与修改注意事项。

- **项目类型**：VuePress 2 静态站点，主题为 `vuepress-theme-plume`。主要内容位于 `docs/` 目录，构建输出位于 `docs/.vuepress/dist`。
- **Node 要求**：参见 `package.json` 的 `engines`（Node >=18.20 或 >=20）。

快速命令示例（来自 `package.json`）：

- 安装依赖：`npm i`
- 本地开发：`npm run docs:dev`（可使用 `--clean-cache --clean-temp` 参见 `docs:dev-clean`）
- 生产构建：`npm run docs:build`
- 本地预览构建产物：`npm run docs:preview`（内部使用 `http-server docs/.vuepress/dist`）
- 更新 VuePress/主题：`npm run vp-update`（运行 `npx vp-update`）

代码/内容改动要点：

- 内容文件：所有博客/笔记均在 `docs/` 下（例如 `docs/notes/开发学习/README.md`）。请直接修改 Markdown文件并保持 FrontMatter（YAML）字段完整（如 `title`、`permalink`、`pageLayout` 等）。
- 命名与编码：仓库使用中文文件名和中文内容；保持 UTF-8，无 BOM，避免在重命名时破坏链接或路径敏感性。
- FrontMatter 模式：一些页面使用自定义字段（示例见 `docs/README.md` 的 `config` 块和 `pageLayout: home`），AI 修改时只变更必要键，保留未知自定义结构。
- 链接与永久链接：若移动或重命名文件，务必同步 `permalink`（若文件有该字段）以免破坏站内链接。

工程与集成点：

- 主题和构建：使用 `vuepress` + `@vuepress/bundler-vite` 与 `vuepress-theme-plume`。不要随意升级主题版本，除非需要并附带回退步骤与本地验证。
- 静态资源：项目内有通过外链（如 jsDelivr）加载图片的示例，修改图片资源时注意 CDN 路径与跨域问题。

AI 助手工作守则（具体、可执行）：

- 修改内容或页面时：运行 `npm run docs:dev` 验证本地渲染是否有错误（检查控制台与浏览器输出）。
- 构建验证：修改主题或配置后执行 `npm run docs:build` 并本地 `npm run docs:preview` 验证生产输出。
- 小心自动更改：不要删除或重写 `docs/.vuepress` 下的配置文件（如果存在自定义配置），除非确认了解影响范围。
- 搜索示例：当不确定约定时，优先搜索 `permalink`、`pageLayout`、`config:`、和主题名 `plume` 来找到类似页面或自定义配置示例。

示例引用（便于定位）：

- 站点入口与布局示例：[docs/README.md](docs/README.md)
- 笔记示例目录：[docs/notes/开发学习/README.md](docs/notes/%E5%BC%80%E5%8F%91%E5%AD%A6%E4%B9%A0/README.md)（含 frontmatter `permalink: /study/`）
- 构建脚本：`package.json`（脚本名 `docs:dev`, `docs:build`, `docs:preview`）

如果不确定如何变更：创建一个小的分支/PR，运行 dev 与 build 验证，并在 PR 描述里写清变更范围与回退步骤。

请反馈哪些部分不明确或需要补充（例如 CI 流程、部署目标、或更详细的主题配置说明），我会据此更新本文件。

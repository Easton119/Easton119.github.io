// docs/.vuepress/config.ts
import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { plumeTheme } from "vuepress-theme-plume";
var config_default = defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Easton\u7684\u535A\u5BA2",
  //这是网站的标题
  description: "\u5DE5\u4F5C\u4E0E\u5B66\u4E60\u8BB0\u5F55",
  head: [
    // 配置站点图标
    ["link", { rel: "icon", type: "image/png", href: "https://theme-plume.vuejs.press/favicon-32x32.png" }]
  ],
  bundler: viteBundler(),
  shouldPrefetch: false,
  // 站点较大，页面数量较多时，不建议启用
  theme: plumeTheme({
    /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
    // hostname: 'https://your_site_url',
    /* 文档仓库配置，用于 editLink */
    // docsRepo: '',
    // docsDir: 'docs',
    // docsBranch: '',
    /* 页内信息 */
    // editLink: true,
    // lastUpdated: true,
    // contributors: true,
    // changelog: false,
    /**
     * 博客
     * @see https://theme-plume.vuejs.press/config/basic/#blog
     */
    // blog: false, // 禁用博客
    // blog: {
    //   postList: true, // 是否启用文章列表页
    //   tags: true, // 是否启用标签页
    //   archives: true, // 是否启用归档页
    //   categories: true, // 是否启用分类页
    //   postCover: 'right', // 文章封面位置
    //   pagination: 15, // 每页显示文章数量
    // },
    blog: {
      /**
       * 通过 glob string 配置包含文件，
       * 默认读取 源目录中的所有 `.md` 文件，但会排除 `notes` 配置中用于笔记的目录。
       */
      include: ["**/*.md"],
      // 如果希望只将源目录下某个目录下的文章读取为博客文章，比如 `blog` 目录，可以配置为：
      // include: ['blog/**/*.md'],
      /**
       * 通过 glob string 配置排除的文件，相对于 源目录
       */
      exclude: [".vuepress/", "**/README.md", "\u5176\u4ED6\u8BBE\u7F6E/"],
      // 禁用分页
      // pagination: false,
      // 每页显示的文章数量
      pagination: 15
    },
    /* 博客文章页面链接前缀 */
    article: "/article/",
    /**
     * 编译缓存，加快编译速度
     * @see https://theme-plume.vuejs.press/config/basic/#cache
     */
    cache: "filesystem",
    /**
     * 为 markdown 文件自动添加 frontmatter 配置
     * @see https://theme-plume.vuejs.press/config/basic/#autofrontmatter
     */
    // autoFrontmatter: {
    //   permalink: true,  // 是否生成永久链接
    //   createTime: true, // 是否生成创建时间
    //   title: true,      // 是否生成标题
    // },
    plugins: {
      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      // shiki: {
      //   // 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
      //   languages: ['shell', 'bash', 'typescript', 'javascript'],
      //   twoslash: true, // 启用 twoslash
      //   whitespace: true, // 启用 空格/Tab 高亮
      //   lineNumbers: true, // 启用行号
      // },
      /* 本地搜索, 默认启用 */
      // search: true,
      /**
       * Algolia DocSearch
       * 启用此搜索需要将 本地搜索 search 设置为 false
       * @see https://theme-plume.vuejs.press/config/plugins/search/#algolia-docsearch
       */
      // docsearch: {
      //   appId: '',
      //   apiKey: '',
      //   indexName: '',
      // },
      /* 文章字数统计、阅读时间，设置为 false 则禁用 */
      // readingTime: true,
      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      // markdownEnhance: {
      //   chartjs: true,
      //   echarts: true,
      //   mermaid: true,
      //   flowchart: true,
      // },
      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      // markdownPower: {
      //   pdf: true,          // 启用 PDF 嵌入 @[pdf](/xxx.pdf)
      //   caniuse: true,      // 启用 caniuse 语法  @[caniuse](feature_name)
      //   plot: true,         // 启用隐秘文本语法 !!xxxx!!
      //   bilibili: true,     // 启用嵌入 bilibili视频 语法 @[bilibili](bid)
      //   youtube: true,      // 启用嵌入 youtube视频 语法 @[youtube](video_id)
      //   artPlayer: true,    // 启用嵌入 artPlayer 本地视频 语法 @[artPlayer](url)
      //   audioReader: true,  // 启用嵌入音频朗读功能 语法 @[audioReader](url)
      //   icons: true,        // 启用内置图标语法  :[icon-name]:
      //   codepen: true,      // 启用嵌入 codepen 语法 @[codepen](user/slash)
      //   replit: true,       // 启用嵌入 replit 语法 @[replit](user/repl-name)
      //   codeSandbox: true,  // 启用嵌入 codeSandbox 语法 @[codeSandbox](id)
      //   jsfiddle: true,     // 启用嵌入 jsfiddle 语法 @[jsfiddle](user/id)
      //   npmTo: true,        // 启用 npm-to 容器  ::: npm-to
      //   demo: true,         // 启用 demo 容器  ::: demo
      //   repl: {             // 启用 代码演示容器
      //     go: true,         // ::: go-repl
      //     rust: true,       // ::: rust-repl
      //     kotlin: true,     // ::: kotlin-repl
      //   },
      //   imageSize: 'local', // 启用 自动填充 图片宽高属性，避免页面抖动
      // },
      /**
       * 在 Markdown 文件中导入其他 markdown 文件内容。
       * @see https://theme-plume.vuejs.press/guide/markdown/include/
       */
      // markdownInclude: true,
      /**
       * Markdown 数学公式
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-math/
       */
      // markdownMath: {
      //   type: 'katex',
      // },
      /**
       * 水印
       * @see https://theme-plume.vuejs.press/guide/features/watermark/
       */
      // watermark: true,
      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      // comment: {
      //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
      //   comment: true,
      //   repo: '',
      //   repoId: '',
      //   category: '',
      //   categoryId: '',
      //   mapping: 'pathname',
      //   reactionsEnabled: true,
      //   inputPosition: 'top',
      // },
    }
    /**
     * 加密功能
     * @see https://theme-plume.vuejs.press/guide/features/encryption/
     */
    // encrypt: {},
  })
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovdXNlcnMvdnVlcHJlc3MvbXktcHJvamVjdC9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcdXNlcnNcXFxcdnVlcHJlc3NcXFxcbXktcHJvamVjdFxcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3VzZXJzL3Z1ZXByZXNzL215LXByb2plY3QvZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgdml0ZUJ1bmRsZXIgfSBmcm9tICdAdnVlcHJlc3MvYnVuZGxlci12aXRlJ1xuaW1wb3J0IHsgZGVmaW5lVXNlckNvbmZpZyB9IGZyb20gJ3Z1ZXByZXNzJ1xuaW1wb3J0IHsgcGx1bWVUaGVtZSB9IGZyb20gJ3Z1ZXByZXNzLXRoZW1lLXBsdW1lJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcbiAgYmFzZTogJy8nLFxuICBsYW5nOiAnemgtQ04nLFxuICB0aXRsZTogJ0Vhc3Rvblx1NzY4NFx1NTM1QVx1NUJBMicsLy9cdThGRDlcdTY2MkZcdTdGNTFcdTdBRDlcdTc2ODRcdTY4MDdcdTk4OThcbiAgZGVzY3JpcHRpb246ICdcdTVERTVcdTRGNUNcdTRFMEVcdTVCNjZcdTRFNjBcdThCQjBcdTVGNTUnLFxuXG4gIGhlYWQ6IFtcbiAgICAvLyBcdTkxNERcdTdGNkVcdTdBRDlcdTcwQjlcdTU2RkVcdTY4MDdcbiAgICBbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCB0eXBlOiAnaW1hZ2UvcG5nJywgaHJlZjogJ2h0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvZmF2aWNvbi0zMngzMi5wbmcnIH1dLFxuICBdLFxuXG4gIGJ1bmRsZXI6IHZpdGVCdW5kbGVyKCksXG4gIHNob3VsZFByZWZldGNoOiBmYWxzZSwgLy8gXHU3QUQ5XHU3MEI5XHU4RjgzXHU1OTI3XHVGRjBDXHU5ODc1XHU5NzYyXHU2NTcwXHU5MUNGXHU4RjgzXHU1OTFBXHU2NUY2XHVGRjBDXHU0RTBEXHU1RUZBXHU4QkFFXHU1NDJGXHU3NTI4XG5cbiAgdGhlbWU6IHBsdW1lVGhlbWUoe1xuICAgIC8qIFx1NkRGQlx1NTJBMFx1NjBBOFx1NzY4NFx1OTBFOFx1N0Y3Mlx1NTdERlx1NTQwRCwgXHU2NzA5XHU1MkE5XHU0RThFIFNFTywgXHU3NTFGXHU2MjEwIHNpdGVtYXAgKi9cbiAgICAvLyBob3N0bmFtZTogJ2h0dHBzOi8veW91cl9zaXRlX3VybCcsXG5cbiAgICAvKiBcdTY1ODdcdTY4NjNcdTRFRDNcdTVFOTNcdTkxNERcdTdGNkVcdUZGMENcdTc1MjhcdTRFOEUgZWRpdExpbmsgKi9cbiAgICAvLyBkb2NzUmVwbzogJycsXG4gICAgLy8gZG9jc0RpcjogJ2RvY3MnLFxuICAgIC8vIGRvY3NCcmFuY2g6ICcnLFxuXG4gICAgLyogXHU5ODc1XHU1MTg1XHU0RkUxXHU2MDZGICovXG4gICAgLy8gZWRpdExpbms6IHRydWUsXG4gICAgLy8gbGFzdFVwZGF0ZWQ6IHRydWUsXG4gICAgLy8gY29udHJpYnV0b3JzOiB0cnVlLFxuICAgIC8vIGNoYW5nZWxvZzogZmFsc2UsXG5cbiAgICAvKipcbiAgICAgKiBcdTUzNUFcdTVCQTJcbiAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvY29uZmlnL2Jhc2ljLyNibG9nXG4gICAgICovXG4gICAgLy8gYmxvZzogZmFsc2UsIC8vIFx1Nzk4MVx1NzUyOFx1NTM1QVx1NUJBMlxuICAgIC8vIGJsb2c6IHtcbiAgICAvLyAgIHBvc3RMaXN0OiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTU0MkZcdTc1MjhcdTY1ODdcdTdBRTBcdTUyMTdcdTg4NjhcdTk4NzVcbiAgICAvLyAgIHRhZ3M6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NTQyRlx1NzUyOFx1NjgwN1x1N0I3RVx1OTg3NVxuICAgIC8vICAgYXJjaGl2ZXM6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NTQyRlx1NzUyOFx1NUY1Mlx1Njg2M1x1OTg3NVxuICAgIC8vICAgY2F0ZWdvcmllczogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU1NDJGXHU3NTI4XHU1MjA2XHU3QzdCXHU5ODc1XG4gICAgLy8gICBwb3N0Q292ZXI6ICdyaWdodCcsIC8vIFx1NjU4N1x1N0FFMFx1NUMwMVx1OTc2Mlx1NEY0RFx1N0Y2RVxuICAgIC8vICAgcGFnaW5hdGlvbjogMTUsIC8vIFx1NkJDRlx1OTg3NVx1NjYzRVx1NzkzQVx1NjU4N1x1N0FFMFx1NjU3MFx1OTFDRlxuICAgIC8vIH0sXG4gICAgYmxvZzoge1xuICAgICAgLyoqXG4gICAgICAgKiBcdTkwMUFcdThGQzcgZ2xvYiBzdHJpbmcgXHU5MTREXHU3RjZFXHU1MzA1XHU1NDJCXHU2NTg3XHU0RUY2XHVGRjBDXG4gICAgICAgKiBcdTlFRDhcdThCQTRcdThCRkJcdTUzRDYgXHU2RTkwXHU3NkVFXHU1RjU1XHU0RTJEXHU3Njg0XHU2MjQwXHU2NzA5IGAubWRgIFx1NjU4N1x1NEVGNlx1RkYwQ1x1NEY0Nlx1NEYxQVx1NjM5Mlx1OTY2NCBgbm90ZXNgIFx1OTE0RFx1N0Y2RVx1NEUyRFx1NzUyOFx1NEU4RVx1N0IxNFx1OEJCMFx1NzY4NFx1NzZFRVx1NUY1NVx1MzAwMlxuICAgICAgICovXG4gICAgICBpbmNsdWRlOiBbJyoqLyoubWQnXSxcbiAgICAgIC8vIFx1NTk4Mlx1Njc5Q1x1NUUwQ1x1NjcxQlx1NTNFQVx1NUMwNlx1NkU5MFx1NzZFRVx1NUY1NVx1NEUwQlx1NjdEMFx1NEUyQVx1NzZFRVx1NUY1NVx1NEUwQlx1NzY4NFx1NjU4N1x1N0FFMFx1OEJGQlx1NTNENlx1NEUzQVx1NTM1QVx1NUJBMlx1NjU4N1x1N0FFMFx1RkYwQ1x1NkJENFx1NTk4MiBgYmxvZ2AgXHU3NkVFXHU1RjU1XHVGRjBDXHU1M0VGXHU0RUU1XHU5MTREXHU3RjZFXHU0RTNBXHVGRjFBXG4gICAgICAvLyBpbmNsdWRlOiBbJ2Jsb2cvKiovKi5tZCddLFxuXG4gICAgICAvKipcbiAgICAgICAqIFx1OTAxQVx1OEZDNyBnbG9iIHN0cmluZyBcdTkxNERcdTdGNkVcdTYzOTJcdTk2NjRcdTc2ODRcdTY1ODdcdTRFRjZcdUZGMENcdTc2RjhcdTVCRjlcdTRFOEUgXHU2RTkwXHU3NkVFXHU1RjU1XG4gICAgICAgKi9cbiAgICAgIGV4Y2x1ZGU6IFsnLnZ1ZXByZXNzLycsICcqKi9SRUFETUUubWQnLCAnXHU1MTc2XHU0RUQ2XHU4QkJFXHU3RjZFLyddLFxuXG4gICAgICAvLyBcdTc5ODFcdTc1MjhcdTUyMDZcdTk4NzVcbiAgICAgIC8vIHBhZ2luYXRpb246IGZhbHNlLFxuICAgICAgLy8gXHU2QkNGXHU5ODc1XHU2NjNFXHU3OTNBXHU3Njg0XHU2NTg3XHU3QUUwXHU2NTcwXHU5MUNGXG4gICAgICBwYWdpbmF0aW9uOiAxNSxcbiAgICB9LFxuXG4gICAgLyogXHU1MzVBXHU1QkEyXHU2NTg3XHU3QUUwXHU5ODc1XHU5NzYyXHU5NEZFXHU2M0E1XHU1MjREXHU3RjAwICovXG4gICAgYXJ0aWNsZTogJy9hcnRpY2xlLycsXG5cbiAgICAvKipcbiAgICAgKiBcdTdGMTZcdThCRDFcdTdGMTNcdTVCNThcdUZGMENcdTUyQTBcdTVGRUJcdTdGMTZcdThCRDFcdTkwMUZcdTVFQTZcbiAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvY29uZmlnL2Jhc2ljLyNjYWNoZVxuICAgICAqL1xuICAgIGNhY2hlOiAnZmlsZXN5c3RlbScsXG5cbiAgICAvKipcbiAgICAgKiBcdTRFM0EgbWFya2Rvd24gXHU2NTg3XHU0RUY2XHU4MUVBXHU1MkE4XHU2REZCXHU1MkEwIGZyb250bWF0dGVyIFx1OTE0RFx1N0Y2RVxuICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9jb25maWcvYmFzaWMvI2F1dG9mcm9udG1hdHRlclxuICAgICAqL1xuICAgIC8vIGF1dG9Gcm9udG1hdHRlcjoge1xuICAgIC8vICAgcGVybWFsaW5rOiB0cnVlLCAgLy8gXHU2NjJGXHU1NDI2XHU3NTFGXHU2MjEwXHU2QzM4XHU0RTQ1XHU5NEZFXHU2M0E1XG4gICAgLy8gICBjcmVhdGVUaW1lOiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTc1MUZcdTYyMTBcdTUyMUJcdTVFRkFcdTY1RjZcdTk1RjRcbiAgICAvLyAgIHRpdGxlOiB0cnVlLCAgICAgIC8vIFx1NjYyRlx1NTQyNlx1NzUxRlx1NjIxMFx1NjgwN1x1OTg5OFxuICAgIC8vIH0sXG5cbiAgICBwbHVnaW5zOiB7XG4gICAgICAvKipcbiAgICAgICAqIFNoaWtpIFx1NEVFM1x1NzgwMVx1OUFEOFx1NEVBRVxuICAgICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2NvbmZpZy9wbHVnaW5zL2NvZGUtaGlnaGxpZ2h0L1xuICAgICAgICovXG4gICAgICAvLyBzaGlraToge1xuICAgICAgLy8gICAvLyBcdTVGM0FcdTcwQzhcdTVFRkFcdThCQUVcdTk4ODRcdThCQkVcdTRFRTNcdTc4MDFcdTU3NTdcdTlBRDhcdTRFQUVcdThCRURcdThBMDBcdUZGMENcdTYzRDJcdTRFRjZcdTlFRDhcdThCQTRcdTUyQTBcdThGN0RcdTYyNDBcdTY3MDlcdThCRURcdThBMDBcdTRGMUFcdTRFQTdcdTc1MUZcdTRFMERcdTVGQzVcdTg5ODFcdTc2ODRcdTY1RjZcdTk1RjRcdTVGMDBcdTk1MDBcbiAgICAgIC8vICAgbGFuZ3VhZ2VzOiBbJ3NoZWxsJywgJ2Jhc2gnLCAndHlwZXNjcmlwdCcsICdqYXZhc2NyaXB0J10sXG4gICAgICAvLyAgIHR3b3NsYXNoOiB0cnVlLCAvLyBcdTU0MkZcdTc1MjggdHdvc2xhc2hcbiAgICAgIC8vICAgd2hpdGVzcGFjZTogdHJ1ZSwgLy8gXHU1NDJGXHU3NTI4IFx1N0E3QVx1NjgzQy9UYWIgXHU5QUQ4XHU0RUFFXG4gICAgICAvLyAgIGxpbmVOdW1iZXJzOiB0cnVlLCAvLyBcdTU0MkZcdTc1MjhcdTg4NENcdTUzRjdcbiAgICAgIC8vIH0sXG5cbiAgICAgIC8qIFx1NjcyQ1x1NTczMFx1NjQxQ1x1N0QyMiwgXHU5RUQ4XHU4QkE0XHU1NDJGXHU3NTI4ICovXG4gICAgICAvLyBzZWFyY2g6IHRydWUsXG5cbiAgICAgIC8qKlxuICAgICAgICogQWxnb2xpYSBEb2NTZWFyY2hcbiAgICAgICAqIFx1NTQyRlx1NzUyOFx1NkI2NFx1NjQxQ1x1N0QyMlx1OTcwMFx1ODk4MVx1NUMwNiBcdTY3MkNcdTU3MzBcdTY0MUNcdTdEMjIgc2VhcmNoIFx1OEJCRVx1N0Y2RVx1NEUzQSBmYWxzZVxuICAgICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2NvbmZpZy9wbHVnaW5zL3NlYXJjaC8jYWxnb2xpYS1kb2NzZWFyY2hcbiAgICAgICAqL1xuICAgICAgLy8gZG9jc2VhcmNoOiB7XG4gICAgICAvLyAgIGFwcElkOiAnJyxcbiAgICAgIC8vICAgYXBpS2V5OiAnJyxcbiAgICAgIC8vICAgaW5kZXhOYW1lOiAnJyxcbiAgICAgIC8vIH0sXG5cbiAgICAgIC8qIFx1NjU4N1x1N0FFMFx1NUI1N1x1NjU3MFx1N0VERlx1OEJBMVx1MzAwMVx1OTYwNVx1OEJGQlx1NjVGNlx1OTVGNFx1RkYwQ1x1OEJCRVx1N0Y2RVx1NEUzQSBmYWxzZSBcdTUyMTlcdTc5ODFcdTc1MjggKi9cbiAgICAgIC8vIHJlYWRpbmdUaW1lOiB0cnVlLFxuXG4gICAgICAvKipcbiAgICAgICAqIG1hcmtkb3duIGVuaGFuY2VcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9jb25maWcvcGx1Z2lucy9tYXJrZG93bi1lbmhhbmNlL1xuICAgICAgICovXG4gICAgICAvLyBtYXJrZG93bkVuaGFuY2U6IHtcbiAgICAgIC8vICAgY2hhcnRqczogdHJ1ZSxcbiAgICAgIC8vICAgZWNoYXJ0czogdHJ1ZSxcbiAgICAgIC8vICAgbWVybWFpZDogdHJ1ZSxcbiAgICAgIC8vICAgZmxvd2NoYXJ0OiB0cnVlLFxuICAgICAgLy8gfSxcblxuICAgICAgLyoqXG4gICAgICAgKiAgbWFya2Rvd24gcG93ZXJcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9jb25maWcvcGx1Z2luL21hcmtkb3duLXBvd2VyL1xuICAgICAgICovXG4gICAgICAvLyBtYXJrZG93blBvd2VyOiB7XG4gICAgICAvLyAgIHBkZjogdHJ1ZSwgICAgICAgICAgLy8gXHU1NDJGXHU3NTI4IFBERiBcdTVENENcdTUxNjUgQFtwZGZdKC94eHgucGRmKVxuICAgICAgLy8gICBjYW5pdXNlOiB0cnVlLCAgICAgIC8vIFx1NTQyRlx1NzUyOCBjYW5pdXNlIFx1OEJFRFx1NkNENSAgQFtjYW5pdXNlXShmZWF0dXJlX25hbWUpXG4gICAgICAvLyAgIHBsb3Q6IHRydWUsICAgICAgICAgLy8gXHU1NDJGXHU3NTI4XHU5NjkwXHU3OUQ4XHU2NTg3XHU2NzJDXHU4QkVEXHU2Q0Q1ICEheHh4eCEhXG4gICAgICAvLyAgIGJpbGliaWxpOiB0cnVlLCAgICAgLy8gXHU1NDJGXHU3NTI4XHU1RDRDXHU1MTY1IGJpbGliaWxpXHU4OUM2XHU5ODkxIFx1OEJFRFx1NkNENSBAW2JpbGliaWxpXShiaWQpXG4gICAgICAvLyAgIHlvdXR1YmU6IHRydWUsICAgICAgLy8gXHU1NDJGXHU3NTI4XHU1RDRDXHU1MTY1IHlvdXR1YmVcdTg5QzZcdTk4OTEgXHU4QkVEXHU2Q0Q1IEBbeW91dHViZV0odmlkZW9faWQpXG4gICAgICAvLyAgIGFydFBsYXllcjogdHJ1ZSwgICAgLy8gXHU1NDJGXHU3NTI4XHU1RDRDXHU1MTY1IGFydFBsYXllciBcdTY3MkNcdTU3MzBcdTg5QzZcdTk4OTEgXHU4QkVEXHU2Q0Q1IEBbYXJ0UGxheWVyXSh1cmwpXG4gICAgICAvLyAgIGF1ZGlvUmVhZGVyOiB0cnVlLCAgLy8gXHU1NDJGXHU3NTI4XHU1RDRDXHU1MTY1XHU5N0YzXHU5ODkxXHU2NzE3XHU4QkZCXHU1MjlGXHU4MEZEIFx1OEJFRFx1NkNENSBAW2F1ZGlvUmVhZGVyXSh1cmwpXG4gICAgICAvLyAgIGljb25zOiB0cnVlLCAgICAgICAgLy8gXHU1NDJGXHU3NTI4XHU1MTg1XHU3RjZFXHU1NkZFXHU2ODA3XHU4QkVEXHU2Q0Q1ICA6W2ljb24tbmFtZV06XG4gICAgICAvLyAgIGNvZGVwZW46IHRydWUsICAgICAgLy8gXHU1NDJGXHU3NTI4XHU1RDRDXHU1MTY1IGNvZGVwZW4gXHU4QkVEXHU2Q0Q1IEBbY29kZXBlbl0odXNlci9zbGFzaClcbiAgICAgIC8vICAgcmVwbGl0OiB0cnVlLCAgICAgICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjUgcmVwbGl0IFx1OEJFRFx1NkNENSBAW3JlcGxpdF0odXNlci9yZXBsLW5hbWUpXG4gICAgICAvLyAgIGNvZGVTYW5kYm94OiB0cnVlLCAgLy8gXHU1NDJGXHU3NTI4XHU1RDRDXHU1MTY1IGNvZGVTYW5kYm94IFx1OEJFRFx1NkNENSBAW2NvZGVTYW5kYm94XShpZClcbiAgICAgIC8vICAganNmaWRkbGU6IHRydWUsICAgICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjUganNmaWRkbGUgXHU4QkVEXHU2Q0Q1IEBbanNmaWRkbGVdKHVzZXIvaWQpXG4gICAgICAvLyAgIG5wbVRvOiB0cnVlLCAgICAgICAgLy8gXHU1NDJGXHU3NTI4IG5wbS10byBcdTVCQjlcdTU2NjggIDo6OiBucG0tdG9cbiAgICAgIC8vICAgZGVtbzogdHJ1ZSwgICAgICAgICAvLyBcdTU0MkZcdTc1MjggZGVtbyBcdTVCQjlcdTU2NjggIDo6OiBkZW1vXG4gICAgICAvLyAgIHJlcGw6IHsgICAgICAgICAgICAgLy8gXHU1NDJGXHU3NTI4IFx1NEVFM1x1NzgwMVx1NkYxNFx1NzkzQVx1NUJCOVx1NTY2OFxuICAgICAgLy8gICAgIGdvOiB0cnVlLCAgICAgICAgIC8vIDo6OiBnby1yZXBsXG4gICAgICAvLyAgICAgcnVzdDogdHJ1ZSwgICAgICAgLy8gOjo6IHJ1c3QtcmVwbFxuICAgICAgLy8gICAgIGtvdGxpbjogdHJ1ZSwgICAgIC8vIDo6OiBrb3RsaW4tcmVwbFxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICBpbWFnZVNpemU6ICdsb2NhbCcsIC8vIFx1NTQyRlx1NzUyOCBcdTgxRUFcdTUyQThcdTU4NkJcdTUxNDUgXHU1NkZFXHU3MjQ3XHU1QkJEXHU5QUQ4XHU1QzVFXHU2MDI3XHVGRjBDXHU5MDdGXHU1MTREXHU5ODc1XHU5NzYyXHU2Mjk2XHU1MkE4XG4gICAgICAvLyB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFx1NTcyOCBNYXJrZG93biBcdTY1ODdcdTRFRjZcdTRFMkRcdTVCRkNcdTUxNjVcdTUxNzZcdTRFRDYgbWFya2Rvd24gXHU2NTg3XHU0RUY2XHU1MTg1XHU1QkI5XHUzMDAyXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvZ3VpZGUvbWFya2Rvd24vaW5jbHVkZS9cbiAgICAgICAqL1xuICAgICAgLy8gbWFya2Rvd25JbmNsdWRlOiB0cnVlLFxuXG4gICAgICAvKipcbiAgICAgICAqIE1hcmtkb3duIFx1NjU3MFx1NUI2Nlx1NTE2Q1x1NUYwRlxuICAgICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2NvbmZpZy9wbHVnaW5zL21hcmtkb3duLW1hdGgvXG4gICAgICAgKi9cbiAgICAgIC8vIG1hcmtkb3duTWF0aDoge1xuICAgICAgLy8gICB0eXBlOiAna2F0ZXgnLFxuICAgICAgLy8gfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBcdTZDMzRcdTUzNzBcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9ndWlkZS9mZWF0dXJlcy93YXRlcm1hcmsvXG4gICAgICAgKi9cbiAgICAgIC8vIHdhdGVybWFyazogdHJ1ZSxcblxuICAgICAgLyoqXG4gICAgICAgKiBcdThCQzRcdThCQkEgY29tbWVudHNcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9ndWlkZS9mZWF0dXJlcy9jb21tZW50cy9cbiAgICAgICAqL1xuICAgICAgLy8gY29tbWVudDoge1xuICAgICAgLy8gICBwcm92aWRlcjogJycsIC8vIFwiQXJ0YWxrXCIgfCBcIkdpc2N1c1wiIHwgXCJUd2lrb29cIiB8IFwiV2FsaW5lXCJcbiAgICAgIC8vICAgY29tbWVudDogdHJ1ZSxcbiAgICAgIC8vICAgcmVwbzogJycsXG4gICAgICAvLyAgIHJlcG9JZDogJycsXG4gICAgICAvLyAgIGNhdGVnb3J5OiAnJyxcbiAgICAgIC8vICAgY2F0ZWdvcnlJZDogJycsXG4gICAgICAvLyAgIG1hcHBpbmc6ICdwYXRobmFtZScsXG4gICAgICAvLyAgIHJlYWN0aW9uc0VuYWJsZWQ6IHRydWUsXG4gICAgICAvLyAgIGlucHV0UG9zaXRpb246ICd0b3AnLFxuICAgICAgLy8gfSxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogXHU1MkEwXHU1QkM2XHU1MjlGXHU4MEZEXG4gICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2d1aWRlL2ZlYXR1cmVzL2VuY3J5cHRpb24vXG4gICAgICovXG4gICAgLy8gZW5jcnlwdDoge30sXG4gIH0pLFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1QsU0FBUyxtQkFBbUI7QUFDNVUsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyxrQkFBa0I7QUFFM0IsSUFBTyxpQkFBUSxpQkFBaUI7QUFBQSxFQUM5QixNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUE7QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUViLE1BQU07QUFBQTtBQUFBLElBRUosQ0FBQyxRQUFRLEVBQUUsS0FBSyxRQUFRLE1BQU0sYUFBYSxNQUFNLG9EQUFvRCxDQUFDO0FBQUEsRUFDeEc7QUFBQSxFQUVBLFNBQVMsWUFBWTtBQUFBLEVBQ3JCLGdCQUFnQjtBQUFBO0FBQUEsRUFFaEIsT0FBTyxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE0QmhCLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0osU0FBUyxDQUFDLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPbkIsU0FBUyxDQUFDLGNBQWMsZ0JBQWdCLDJCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLL0MsWUFBWTtBQUFBLElBQ2Q7QUFBQTtBQUFBLElBR0EsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFNVCxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFZUCxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF1R1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPRixDQUFDO0FBQ0gsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

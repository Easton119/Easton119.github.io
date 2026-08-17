import { readFile, writeFile, access, mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DOCS_DIR = resolve(__dirname, '..', 'docs')
const CONFIG_PATH = resolve(__dirname, 'sync.config.json')

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')

async function main() {
  const config = JSON.parse(await readFile(CONFIG_PATH, 'utf-8'))
  const mappings = config.mappings || []

  let updated = 0
  let created = 0
  let skipped = 0

  for (const { main, blog } of mappings) {
    const blogPath = resolve(DOCS_DIR, blog)

    let mainRaw
    try {
      mainRaw = await readFile(main, 'utf-8')
    } catch {
      console.warn(`[跳过] 主库文件不存在: ${main}`)
      skipped++
      continue
    }

    const mainParsed = matter(mainRaw)
    const mainBody = mainParsed.content.trimStart()

    let blogExists = true
    try {
      await access(blogPath)
    } catch {
      blogExists = false
    }

    if (!blogExists) {
      const content = matter.stringify(mainBody, mainParsed.data)
      if (dryRun) {
        console.log(`[将新建] ${blog}`)
        created++
        continue
      }
      await mkdir(dirname(blogPath), { recursive: true })
      await writeFile(blogPath, content, 'utf-8')
      console.log(`[新建]   ${blog}（博客端不存在，已用主库 front matter 创建，请按需调整分类）`)
      created++
      continue
    }

    const blogRaw = await readFile(blogPath, 'utf-8')
    const blogParsed = matter(blogRaw)

    if (blogParsed.content.trimStart() === mainBody) {
      console.log(`[相同]   ${blog}`)
      continue
    }

    const newContent = matter.stringify(mainBody, blogParsed.data)
    if (dryRun) {
      console.log(`[将更新] ${blog}`)
      updated++
      continue
    }
    await writeFile(blogPath, newContent, 'utf-8')
    console.log(`[更新]   ${blog}`)
    updated++
  }

  console.log(`\n完成：新建 ${created}，更新 ${updated}，跳过 ${skipped}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
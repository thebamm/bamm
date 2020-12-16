import remark from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(prism, {
      transformInlineCode: true,
      options: [
        'line-numbers'
      ]
    })
    .use(html)
    .process(markdown)

  return result.toString()
}

import remark from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'
import slug from 'remark-slug'
import headings from 'remark-autolink-headings'

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(slug)
    .use(headings)
    .use(html)
    .use(prism, {
      transformInlineCode: true,
      plugins: [
        'line-numbers'
      ]
    })
    .process(markdown)

  return result.toString()
}

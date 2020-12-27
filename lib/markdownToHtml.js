import remark from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'
import slug from 'remark-slug'
import headings from 'remark-autolink-headings'
import externalLinks from 'remark-external-links'

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(externalLinks, {target: '_blank', rel: ['nofollow noopener']})
    .use(slug)
    .use(headings, {
      // linkProperties: {
      //   className: ['group-hover:opacity-100']
      // },
    })
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

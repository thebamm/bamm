import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>

      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>

          <div className="mb-4 md:mb-0">
            <h6>{author.name}</h6>
            <DateFormatter dateString={date} className='text-coal-300'/>
          </div>
        </div>

        <div>
          <p className="leading-relaxed mb-4">{excerpt}</p>
          {/*<Avatar name={author.name} picture={author.picture} />*/}
        </div>
      </div>
    </section>
  )
}

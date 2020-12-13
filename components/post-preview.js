import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className='w-full md:w-1/2 xl:w-1/3 p-4'>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>

      <h4 className="mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h4>

      <div className="text-lg mb-4">
        <h6>{author.name}</h6>
        <DateFormatter dateString={date}  className='text-coal-300'/>
      </div>

      <p className="leading-relaxed mb-4">{excerpt}</p>
      {/*<Avatar name={author.name} picture={author.picture} />*/}
    </div>
  )
}

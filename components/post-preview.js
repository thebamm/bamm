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
        <CoverImage slug={slug} title={title} src={coverImage} className='h-60'/>
      </div>

      <div className='mb-6'>
        <DateFormatter dateString={date} className='text-coal-400 dark:text-apple-50 uppercase'/>
        {/*<p className='inline-block rounded-lg font-medium leading-none py-2 px-3 text-sm bg-salmon-100 text-salmon-500'>Category</p>*/}
      </div>

      <h4 className="mb-3 leading-snug">
        {/*<Link as={`/posts/${slug}`} href="/posts/[slug]" href={`/posts/${encodeURIComponent(slug)}`}>*/}
        <Link as={`/posts/${slug}`} href={`/posts/${encodeURIComponent(slug)}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h4>

      {/*<p className="leading-relaxed mb-4">{excerpt}</p>*/}

      <div className='mb-4'>
        <p className='font-bold'>{author.name}</p>
        {/*<DateFormatter dateString={date}  className='text-sm text-coal-400 dark:text-apple-50'/>*/}
      </div>
    </div>
  )
}

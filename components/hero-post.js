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
    <section className='flex flex-wrap mb-8 md:mb-16'>
      <div className="w-full md:w-1/2 mb-5 md:mb-0">
        <CoverImage title={title} src={coverImage} slug={slug} className='h-96'/>
      </div>

      <div className="w-full md:w-1/2 p-0 md:p-8">
        <div className='mb-6'>
          <DateFormatter dateString={date} className='text-coal-400 dark:text-apple-50 uppercase'/>
          {/*<p className='inline-block rounded-lg font-medium leading-none py-2 px-3 text-sm bg-salmon-100 text-salmon-500'>Category</p>*/}
        </div>

        <h3 className="mb-4 leading-tight">
          <Link as={`/posts/${slug}`} href={`/posts/${encodeURIComponent(slug)}`}>
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>

        <p className="leading-relaxed mb-4">{excerpt}</p>

        <div className="mb-4">
          <p className='text-xl font-bold'>{author.name}</p>
          {/*<DateFormatter dateString={date} className='text-coal-400 dark:text-apple-50'/>*/}
        </div>
      </div>
    </section>
  )
}

import DateFormatter from './dateFormatter'
import CoverImage from './coverImage'
import Link from 'next/link'
import PostCategory from './postCategory'
// import { IconArrowRight } from './icons'

export default function HeroPost({
  title,
  coverImage,
  date,
  slug,
  smallContent,
  category,
}) {

  return (
    <section className='flex flex-wrap md:items-center mb-8 md:mb-28'>
      <div className="w-full md:w-1/2 mb-5 md:mb-0">
        <CoverImage title={title} src={coverImage} slug={slug} className='h-96'/>
      </div>

      <div className="w-full md:w-1/2 p-0 md:p-8">
        <div className='mb-6'>
          {/*<DateFormatter dateString={date} className='text-coal-400 dark:text-apple-50 uppercase'/>*/}
          <PostCategory>{category}</PostCategory>
        </div>

        <h3 className="mb-4 leading-tight">
          <Link as={`/posts/${slug}`} href={`/posts/${encodeURIComponent(slug)}`}>
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>

        <p className="leading-relaxed mb-6">{smallContent}</p>

        <DateFormatter dateString={date} className='text-sm text-coal-400 dark:text-apple-50 uppercase mb-8'/>

        {/*<Link as={`/posts/${slug}`} href={`/posts/${encodeURIComponent(slug)}`}>*/}
        {/*  <a className="flex items-center font-semibold">Read more <IconArrowRight className='text-xl ml-1 text-apple-500'/></a>*/}
        {/*</Link>*/}
      </div>
    </section>
  )
}

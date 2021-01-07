import DateFormatter from './dateFormatter'
import CoverImage from './coverImage'
import Link from 'next/link'
import PostCategory from './postCategory'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  smallContent,
  category
}) {
  return (
    <div className='w-full md:w-1/2 xl:w-1/3 p-4'>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} className='h-60'/>
      </div>

      <div className='mb-6'>
        <PostCategory>{category}</PostCategory>
      </div>

      <h4 className="mb-3 leading-snug">
        {/*<Link as={`/posts/${slug}`} href="/posts/[slug]" href={`/posts/${encodeURIComponent(slug)}`}>*/}
        <Link as={`/posts/${slug}`} href={`/posts/${encodeURIComponent(slug)}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h4>

      <p className="leading-relaxed mb-6">{smallContent}</p>

      <DateFormatter dateString={date} className='text-sm text-coal-400 dark:text-apple-50 uppercase mb-8'/>

      {/*<p className="leading-relaxed mb-4">{excerpt}</p>*/}

      {/*<div className='mb-4'>*/}
      {/*  <p className='font-bold'>{author.name}</p>*/}
      {/*  /!*<DateFormatter dateString={date}  className='text-sm text-coal-400 dark:text-apple-50'/>*!/*/}
      {/*</div>*/}
    </div>
  )
}

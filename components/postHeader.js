import DateFormatter from './dateFormatter'
import CoverImage from './coverImage'
import PostTitle from './postTitle'
import PostCategory from './postCategory'

export default function PostHeader({ title, coverImage, date, author, figcaption, category }) {
  return (
    <>
      <div className="relative max-w-2xl mx-auto pt-12">
        <div className='mb-12 text-center'>
          <PostCategory>{category}</PostCategory>
          {/*<p className='inline-block rounded-lg font-medium leading-none py-2 px-3 text-sm bg-salmon-100 text-salmon-500'>Category</p>*/}
        </div>

        <PostTitle>{title}</PostTitle>

        <div className='mb-12 text-center'>
          <DateFormatter dateString={date} className='text-coal-400 dark:text-apple-50 uppercase'/>
        </div>

        {/*<div className="mb-6 text-center">*/}
        {/*  <p className='text-lg font-bold'>{author.name}</p>*/}
        {/*  /!*<DateFormatter dateString={date} className='text-coal-400 dark:text-apple-50' />*!/*/}
        {/*</div>*/}
      </div>

      <div className="mb-8 md:mb-16 sm:mx-0 relative">
        <div className="bg-gray-100 w-full flex-none rounded-3xl"/>
        <div
          className="w-full flex-none -ml-full rounded-3xl transform shadow-lg bg-gradient-to-br from-cyan-400 to-light-blue-500 rotate-1 sm:rotate-2"/>
        <CoverImage title={title} src={coverImage} figcaption={figcaption} className='h-96 md:h-120'/>
      </div>
    </>
  )
}

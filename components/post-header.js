import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author, figcaption }) {
  return (
    <>
      <div className="relative max-w-2xl mx-auto pt-12">
        <div className='mb-12 text-center'>
          <DateFormatter dateString={date} className='text-coal-400 dark:text-apple-50 uppercase'/>
          {/*<p className='inline-block rounded-lg font-medium leading-none py-2 px-3 text-sm bg-salmon-100 text-salmon-500'>Category</p>*/}
        </div>

        <PostTitle>{title}</PostTitle>

        <div className="mb-6 text-center">
          <p className='text-lg font-bold'>{author.name}</p>
          {/*<DateFormatter dateString={date} className='text-coal-400 dark:text-apple-50' />*/}
        </div>
      </div>

      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} figcaption={figcaption} className='h-96'/>
      </div>
    </>
  )
}

import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author, figcaption }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>

      <div className="mb-6 text-center">
        <h6>{author.name}</h6>
        <DateFormatter dateString={date} className='text-coal-400'/>
      </div>

      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} figcaption={figcaption}/>
      </div>
    </>
  )
}

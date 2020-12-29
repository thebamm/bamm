import { IconFacebookFill, IconLinkedinFill, IconTwitterFill } from './icons'

const SocialShare = ({ url, title }) => {
  return (
    <div className='flex items-center justify-evenly max-w-2xl mx-auto'>
      <p>Share</p>
      <a
        href={`https://twitter.com/share?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
        target='_blank'
        rel='noopener noreferrer'
        className='ml-2 text-2xl'
      >
        <IconTwitterFill className='fill-current'/>
        <span className='sr-only'>Share on Twitter</span>
      </a>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&t=${encodeURIComponent(title)}`}
        target='_blank'
        rel='noopener noreferrer'
        className='ml-2 text-2xl'
      >
        <IconFacebookFill className='fill-current'/>
        <span className='sr-only'>Share on Facebook</span>
      </a>

      <a
        href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`}
        target='_blank'
        rel='noopener noreferrer'
        className='ml-2 text-2xl'
      >
        <IconLinkedinFill className='fill-current'/>
        <span className='sr-only'>Share on LinkedIn</span>
      </a>
    </div>
  )
}

export default SocialShare

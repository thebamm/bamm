import {
  IconEmailFill,
  IconFacebookFill,
  IconLinkedinFill,
  IconRedditFill,
  IconTwitterFill
} from './icons'
import cn from 'classnames'

const SocialShare = ({ url, title }) => {
  return (
    <div className='flex items-center justify-evenly max-w-2xl mx-auto border-t-2 border-coal-100 mt-20 pt-12'>
      <p>Share</p>

      <SocialIcon
        href={`https://twitter.com/share?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
        className={'ml-2 text-2xl'}
        ariaLabel={'Twitter'}
        srTitle={'Share on Twitter'}
        icon={<IconTwitterFill className='fill-current'/>}
      />

      <SocialIcon
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&t=${encodeURIComponent(title)}`}
        className={'ml-2 text-2xl'}
        ariaLabel={'Facebook'}
        srTitle={'Share on Facebook'}
        icon={<IconFacebookFill className='fill-current'/>}
      />

      <SocialIcon
        href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`}
        className={'ml-2 text-2xl'}
        ariaLabel={'LinkedIn'}
        srTitle={'Share on LinkedIn'}
        icon={<IconLinkedinFill className='fill-current'/>}
      />

      <SocialIcon
        href={`https://www.reddit.com/submit??url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`}
        className={'ml-2 text-2xl'}
        ariaLabel={'Reddit'}
        srTitle={'Share on Reddit'}
        icon={<IconRedditFill className='fill-current'/>}
      />

      <SocialIcon
        href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`}
        className={'ml-2 text-2xl'}
        target={'_self'}
        ariaLabel={'Email'}
        srTitle={'Share on Email'}
        icon={<IconEmailFill className='fill-current'/>}
      />
    </div>
  )
}

const SocialIcon = ({
  href,
  target = '_blank',
  className,
  ariaLabel = '',
  srTitle = '',
  icon
}) => {
  const socialClass = cn(className)

  return (
    <a
      href={href}
      target={target}
      rel='noopener noreferrer nofollow'
      className={socialClass}
      aria-label={ariaLabel}
    >
      {icon}
      <span className='sr-only'>{srTitle}</span>
    </a>
  )
}

export default SocialShare

import cn from 'classnames'
import Link from 'next/link'
// import Image from 'next/image'

export default function CoverImage({ title, src, slug, figcaption, className }) {
  const imageClass = cn('bg-cover bg-center', className)
  const pictureClass = cn('relative block overflow-hidden m-0 inset-0', className)

  const pictureInlineClasses = {
    visibility: 'visible',
    position: 'absolute',
    inset: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
  }

  const image = (
    // <img
    //   src={src}
    //   alt={`Cover Image for ${title}`}
    //   className={cn('shadow-small', {
    //     'hover:shadow-medium transition-shadow duration-200': slug,
    //   })}
    //   width={1600}
    //   height={450}
    // />
    // <Image
    //   src={src}
    //   alt={`Cover Image for ${title}`}
    //   className={cn('shadow-small', {
    //     'hover:shadow-medium transition-shadow duration-200': slug,
    //   })}
    //   layout='fill'
    //   objectFit='cover'
    //   quality={100}
    //   // unoptimized={true}
    //   // width={1600}
    //   // height={450}
    // />
    // <div className={imageClass} style={{ backgroundImage: `url(${src})`}}/>

    <div className={pictureClass}>
      <picture>
          <source srcSet={`${src}.webp`} type="image/webp"/>
          <img src={src} alt={title} style={pictureInlineClasses}/>
      </picture>
    </div>
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href={`/posts/${encodeURIComponent(slug)}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        <figure>
          {image}

          {figcaption &&
            <figcaption>
              {figcaption}
            </figcaption>
          }
        </figure>
      )}
    </div>
  )
}

import cn from 'classnames'
import Link from 'next/link'

export default function CoverImage({ title, src, slug, figcaption, className }) {
  const pictureWrapClass = cn('relative block overflow-hidden m-0 inset-0', className)

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
    <div className={pictureWrapClass}>
      <picture>
          <source srcSet={`${src}.avif`} type="image/avif"/>
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

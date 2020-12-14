import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

export default function CoverImage({ title, src, slug, figcaption }) {
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
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      quality={100}
      width={1600}
      height={450}
    />
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

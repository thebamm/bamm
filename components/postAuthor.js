
const PostAuthor = ({author}) => {
  return (
    <div className="flex items-center max-w-2xl mx-auto border-t-2 border-coal-100 mt-12 pt-12">
      {author.gravatar &&
        <div className="flex-shrink-0 h-28 w-28">
          <img className="h-28 w-28 rounded-full"
               src={`https://www.gravatar.com/avatar/${author.gravatar}?s=200`}
               alt={author.name}/>
        </div>
      }

      <div className="ml-4">
        <div className="text-base font-bold">
          {author.name}
        </div>

        {author.twitter &&
          <div className="text-sm">
            <a href={`https://twitter.com/${author.twitter}`} target='_blank' rel='noreferrer noopener'>{`@${author.twitter}`}</a>
          </div>
        }
      </div>
    </div>
  )
}

export default PostAuthor

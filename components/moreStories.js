import PostPreview from './postPreview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h4 className="mb-8">
        Latest posts
      </h4>

      <div className="flex flex-wrap -m-4">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            smallContent={post.smallContent}
            category={post.category}
          />
        ))}
      </div>
    </section>
  )
}

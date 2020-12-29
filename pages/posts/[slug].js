import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/postBody'
import PostHeader from '../../components/postHeader'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/postTitle'
import { SITE_URL } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import { DiscussionEmbed } from 'disqus-react'
import PostAuthor from '../../components/postAuthor'
import SocialShare from '../../components/socialShare'

export default function Post({ post, morePosts }) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const postTitle = `${post.title} | bamm`
  const postUrl = `${SITE_URL}/posts/${post.slug}`
  const disqusShortname = 'bamm-co'

  const disqusConfig = {
    url: postUrl,
    identifier: post.slug,
    title: post.title,
  }

  return (
    <Layout meta={{
      title: postTitle,
      description: `bamm wrote about ${post.title}`,
      url: postUrl,
      type: 'article',
      image: `${SITE_URL}${post.ogImage.url}`
    }}>
      <Container className='pt-4 pb-32'>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className='mb-32'>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                figcaption={post.figcaption}
              />

              <PostBody content={post.content} />

              <PostAuthor author={post.author}/>

              <SocialShare title={postTitle} url={postUrl}/>
            </article>

            <div className='max-w-2xl mx-auto'>
              <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
              />
            </div>
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'figcaption',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

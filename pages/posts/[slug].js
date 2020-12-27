import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/postBody'
import PostHeader from '../../components/postHeader'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/postTitle'
import Head from 'next/head'
import { CMS_NAME, OG_DESCRIPTION, OG_IMAGE_URL, SITE_MAIN_TITLE, SITE_URL } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import { DiscussionEmbed } from 'disqus-react'

export default function Post({ post, morePosts }) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const postTitle = `${post.title} | ${SITE_MAIN_TITLE}`
  const postUrl = `${SITE_URL}/posts/${post.slug}`

  const disqusShortname = "bamm-co"

  const disqusConfig = {
    url: postUrl,
    identifier: post.slug,
    title: post.title,
  }

  return (
    <Layout>
      <Container className='pt-20 pb-32'>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className='mb-32'>
              <Head>
                <title>{postTitle}</title>
                <meta name="description"  content={post.title} />

                <meta property="og:title" content={postTitle} />
                <meta property="og:url" content={postUrl} />
                <meta property="og:description" content={post.title} />
                <meta property="og:type" content="article" />
                <meta property="og:image" content={post.ogImage.url} />
              </Head>

              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                figcaption={post.figcaption}
              />

              <PostBody content={post.content} />
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

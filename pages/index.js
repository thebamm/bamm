import Container from '../components/container'
import MoreStories from '../components/moreStories'
import HeroPost from '../components/heroPost'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { SITE_MAIN_TITLE } from '../lib/constants'
import HomeHero from '../components/homeHero'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  
  return (
    <Layout>
      <HomeHero/>

      <Container className='pt-8 pb-32'>
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
            smallContent={heroPost.smallContent}
          />
        )}

        {!!morePosts.length &&
          <MoreStories posts={morePosts} />
        }
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'smallContent'
  ])

  return {
    props: { allPosts },
  }
}

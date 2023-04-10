import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'
export const POSTS_PER_PAGE = 5

export async function getServerSideProps(context) {
  const token = context.req.cookies['GradPanelJWT']
  const posts = await getAllFilesFrontMatter(token)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Projects({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO title={`Project - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Projects"
      />
    </>
  )
}

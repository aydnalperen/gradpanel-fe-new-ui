import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllProjects, getCategories } from '@/lib/apiController'
import ListLayout from '../../../layouts/ListLayout'
import { POSTS_PER_PAGE } from '..'

export async function getServerSideProps(context) {
  const token = context.req.cookies['GradPanelJWT']

  const {
    params: { page },
  } = context
  const posts = await getAllProjects(token)
  const categories = await getCategories(token)
  const pageNumber = parseInt(page)
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return {
    props: {
      posts,
      initialDisplayPosts,
      pagination,
      categories,
    },
  }
}

export default function PostPage({ posts, initialDisplayPosts, pagination, categories }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Projects"
        categories={categories}
      />
    </>
  )
}

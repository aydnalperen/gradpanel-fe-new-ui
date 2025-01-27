import { getAllProjects, getCategories } from '@/lib/apiController'
import ListLayout from '../layouts/ListLayout'
export const POSTS_PER_PAGE = 5

export async function getServerSideProps(context) {
  const token = context.req.cookies['GradPanelJWT']
  const posts = await getAllProjects(token)
  const categories = await getCategories(token)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination, categories, token } }
}

export default function Projects({ posts, initialDisplayPosts, pagination, categories, token }) {
  return (
    <>
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Projects"
        categories={categories}
        token={token}
      />
    </>
  )
}

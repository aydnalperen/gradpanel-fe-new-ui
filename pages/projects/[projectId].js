import PageTitle from '@/components/PageTitle'
import { getProjectById } from '@/lib/apiController'
import PostLayout from '../../layouts/PostLayout'
export async function getServerSideProps(context) {
  const token = context.req.cookies['GradPanelJWT']
  const params = context.params

  const post = await getProjectById(token, params.projectId)

  return { props: { post, token } }
}

export default function Project({ post, token }) {
  return (
    <>
      {post != null ? (
        <PostLayout frontMatter={post} token={token} />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  )
}

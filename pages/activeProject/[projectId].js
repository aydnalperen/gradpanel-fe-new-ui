import PageTitle from '@/components/PageTitle'
import { getActiveProjectByToken } from '@/lib/apiController'
import PostLayout from '../../layouts/PostLayout'
export async function getServerSideProps(context) {
  const token = context.req.cookies['GradPanelJWT']
  const params = context.params

  const project = await getActiveProjectByToken(token, params.projectId)

  return { props: { project, token } }
}

export default function Project({ project, token }) {
  return (
    <>
      {project != null ? (
        <PostLayout frontMatter={project} token={token} isActive={true} />
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

import { getActiveProjectByToken } from '@/lib/mdx'
import PostLayout from '../layouts/PostLayout'
import PageTitle from '@/components/PageTitle'

export async function getServerSideProps(context) {
  const token = context.req.cookies['GradPanelJWT']

  const project = await getActiveProjectByToken(token)
  return { props: { project, token } }
}

export default function ActiveProject({ project, token }) {
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

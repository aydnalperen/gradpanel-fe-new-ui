import { getActiveProjectByToken } from '@/lib/apiController'
import PostLayout from '../layouts/PostLayout'
import PageTitle from '@/components/PageTitle'
import ListLayout from 'layouts/ListLayout'

export async function getServerSideProps(context) {
  const token = context.req.cookies['GradPanelJWT']

  const project = await getActiveProjectByToken(token)
  return { props: { project, token } }
}

export default function ActiveProject({ project, token }) {
  return (
    <>
      {project.length ? (
        <ListLayout posts={project} title="Active projects" token={token} isActive={true} />
      ) : (
        <PostLayout frontMatter={project} token={token} isActive={true} />
      )}
    </>
  )
}

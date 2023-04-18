import { getNotesByProject } from '@/lib/mdx'
import PageTitle from '@/components/PageTitle'
import NotesLayout from '../../layouts/NotesLayout'

export async function getServerSideProps(context) {
  const token = context.req.cookies['GradPanelJWT']
  const projectId = context.params.projectId
  const notes = await getNotesByProject(token, projectId)
  console.log(projectId)
  return { props: { notes, token, projectId } }
}

export default function Notes({ notes, token, projectId }) {
  return (
    <>
      {notes != null ? (
        <NotesLayout notes={notes} title="Notes" token={token} projectId={projectId} />
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

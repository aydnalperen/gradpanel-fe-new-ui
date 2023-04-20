import { getNoteById, getNotesByProject } from '@/lib/apiController'
import AuthorLayout from 'layouts/AuthorLayout'
import PostLayout from '../../../layouts/PostSimple'
export async function getServerSideProps(context) {
  const token = context.req.cookies['GradPanelJWT']
  const id = context.params.noteId
  const note = await getNoteById(token, id)
  return { props: { note, token, id } }
}
export default function NoteDetails({ note, token }) {
  return (
    <>
      <AuthorLayout frontMatter={note} />
    </>
  )
}

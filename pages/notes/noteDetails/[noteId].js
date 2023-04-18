import PostLayout from '../../../layouts/PostSimple'

export default function NoteDetails({ note, token }) {
  return (
    <>
      <PostLayout frontMatter={note} />
    </>
  )
}

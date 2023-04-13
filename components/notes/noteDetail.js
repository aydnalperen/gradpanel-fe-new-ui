import UpdateNoteModal from '../modals/note/updateNote'
import { useState } from 'react'
export default function NoteDetailCard({ note, token }) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <div className="flex h-64 flex-col justify-between">
        <UpdateNoteModal open={open} handleClose={handleClose} note={note} token={token} />
        <div className="flex items-center justify-between">
          <span className="font-ibm text-sm font-semibold text-gray-900">
            Create Date : {note.CreatedAt}
          </span>
        </div>
        <div className="box-border flex items-center border-b-2">
          <h5 className="mb-1 text-2xl font-bold text-gray-900 ">
            Title : <br /> {note.title}
          </h5>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className="font-ibm text-sm font-bold text-gray-500">Note :</span>
          </div>
          <span className="font-ibm text-sm text-gray-500 ">{note.text}</span>
        </div>
        <div className="flex flex-col items-center">
          <button
            onClick={handleOpen}
            className="w-1/3 transform rounded bg-gray-700 py-2 px-4 font-medium uppercase text-white shadow transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
          >
            Edit
          </button>
        </div>
      </div>
    </>
  )
}

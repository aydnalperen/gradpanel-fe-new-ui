import Link from '@/components/Link'
import AddNoteModal from '@/components/modals/note/addNote'
import formatDate from '@/lib/utils/formatDate'
import { useState } from 'react'
export default function NotesLayout({ notes, title, token, projectId }) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <AddNoteModal open={open} handleClose={handleClose} token={token} projectId={projectId} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex items-center space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <button
            className="ml-5 transform rounded bg-gray-700 p-2 font-medium text-white shadow transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
            onClick={handleOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <ul>
          {notes &&
            notes.map((frontMatter) => {
              const { ID, CreatedAt, title, text } = frontMatter
              return (
                <li key={ID} className="py-4">
                  <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Created At</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={CreatedAt}>{formatDate(CreatedAt)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-3 xl:col-span-3">
                      <div>
                        <h3 className="text-2xl font-bold leading-8 tracking-tight">
                          <Link
                            href={`/notes/noteDetails/${ID}`}
                            className="text-gray-900 dark:text-gray-100"
                          >
                            {title}
                          </Link>
                        </h3>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        {/* {text.slice(0, 70) + '...'} */}
                        {text}
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
        </ul>
      </div>
    </>
  )
}

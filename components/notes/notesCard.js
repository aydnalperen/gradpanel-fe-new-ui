import Link from 'next/link'
export default function NotesCard({ projectId }) {
  return (
    <div className="flex w-3/5 justify-between border-b-4 py-5">
      <div className="flex flex-col">
        <h5 className="mb-1 text-xl font-bold text-gray-900 ">Project Notes</h5>
      </div>

      <Link href={'/notes/' + projectId} passHref>
        <button className="transform rounded bg-gray-700 p-2 font-medium text-white shadow transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg">
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
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          </svg>
        </button>
      </Link>
    </div>
  )
}

import Link from 'next/link'
import AddLinkModal from '../modals/accessLink/addLink'
import { useState } from 'react'

export default function AccessLinksCard({ projectID, links, token }) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <AddLinkModal open={open} handleClose={handleClose} token={token} projectID={projectID} />
      <div className="flex w-3/5 py-5">
        {links &&
          links.map((l, index) => {
            return (
              <div key={index} className="mr-5 flex flex-col items-center">
                <h5 className="mb-1 text-xl font-bold text-gray-900 ">{l.title}</h5>
                <Link href={l.link} target="_blank">
                  <button className="transform rounded bg-gray-700 p-2 font-medium text-white shadow transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg">
                    Go To
                  </button>
                </Link>
              </div>
            )
          })}
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
    </>
  )
}

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
      <div className="mt-5 flex flex-col border-b-4">
        <div className="flex items-center">
          <span className="font-ibm text-xl font-bold text-gray-500">Access Links</span>
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
        <div className="flex w-3/5 p-10">
          {links &&
            links.map((l, index) => {
              return (
                <div key={index} className="mr-5 flex flex-col items-center">
                  <h5 className="mb-1 text-xl font-bold text-gray-900 ">{l.title}</h5>
                  <Link href={l.link} target="_blank" passHref>
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
            })}
        </div>
      </div>
    </>
  )
}

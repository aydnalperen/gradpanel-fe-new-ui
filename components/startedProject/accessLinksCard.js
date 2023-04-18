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
                  <div className="flex">
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
                    <button className="ml-2 transform rounded bg-gray-700 p-2 font-medium text-white shadow transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg">
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
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}

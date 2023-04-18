import UpdateMeetingModal from '../modals/meeting/updateModal'
import { useState } from 'react'

export default function MeetingCard({ isInstructor, meeting }) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <UpdateMeetingModal open={open} handleClose={handleClose} meeting={meeting} />
      <div className="flex w-full flex-col justify-between border-b-4 py-5 sm:w-3/5 sm:flex-row">
        <div className="flex w-full items-center justify-between">
          <h5 className="mb-1 text-xl font-bold text-gray-900 ">{meeting.name}</h5>
          <a
            href={meeting.link}
            target="_blank"
            className="text-sm text-gray-500 hover:underline "
            rel="noreferrer"
          >
            {meeting.link}
          </a>

          {isInstructor && (
            <button
              onClick={handleOpen}
              className="transform rounded bg-gray-700 p-2 font-medium text-white shadow transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
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
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </>
  )
}

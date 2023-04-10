import UpdateMeetingModal from '../modals/meeting/updateModal'
import { useState } from 'react'

export default function MeetingCard({ isInstructor, meeting }) {
  meeting = {
    name: 'Regular Meeting',
    link: 'https://zoom.com',
  }
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <UpdateMeetingModal open={open} handleClose={handleClose} meeting={meeting} />
      <div className="flex w-3/5 justify-between py-5">
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
              className="focus:shadow-outline mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 transition-colors duration-150 hover:bg-gray-200"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
              </svg>
            </button>
          )}
        </div>
      </div>
    </>
  )
}

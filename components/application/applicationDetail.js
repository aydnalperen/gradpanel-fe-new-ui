import Image from 'next/image'
import { useState } from 'react'
import ProfileModal from '../modals/profile/profileModal'
import { API_URL } from '../../lib/constants'
import formatDate from '@/lib/utils/formatDate'

export default function ApplicationDetailCard({ application, token }) {
  const [open, setOpen] = useState(false)
  const [responseNote, setResponse] = useState('')
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const addResponseHandler = async (status) => {
    let body = {
      applicationId: application.ID,
      responseNote: responseNote,
      status: status,
    }
    const endpoint = API_URL + '/protected/application-response/response'

    const options = {
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(body),
    }
    let response = await fetch(endpoint, options)

    return response
  }
  return (
    <article className="mb-6 rounded-lg p-10 text-base dark:bg-gray-900">
      <ProfileModal open={open} handleClose={handleClose} profile={application.Profile} />
      <footer className="mb-2 flex items-center justify-between">
        <div className="flex items-center">
          <h3 className="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
            {application.Profile.firstName} {application.Profile.lastName}
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            <time dateTime={application.CreatedAt}>{formatDate(application.CreatedAt)}</time>
          </p>
        </div>
      </footer>
      <p className="text-gray-500 dark:text-gray-400">{application.applicationNote}</p>
      <div className="flex justify-around px-10 pt-5">
        <button
          onClick={handleOpen}
          type="button"
          className="mb-2 rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Profile
        </button>
      </div>

      {application.status === 'pending' && (
        <div>
          <label htmlFor="message" className="font-ibm mb-2 block text-sm font-bold text-gray-500">
            Response to application:
          </label>
          <textarea
            onChange={(event) => setResponse(event.target.value)}
            id="message"
            rows="4"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
          <div className="flex">
            <div className="m-auto mt-5">
              <button
                onClick={async () => {
                  addResponseHandler('rejected')
                }}
                type="button"
                className="m-auto mr-2 mb-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Reject
              </button>
              <button
                onClick={async () => {
                  addResponseHandler('accepted')
                }}
                type="button"
                className="m-auto mr-2 mb-2 rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
      {application.ApplicationResponses.length != 0 && (
        <div className="flex items-center justify-center">
          <div className="px-10">
            <div className="max-w-xl rounded-2xl bg-white px-10 py-8 shadow-lg transition duration-500 hover:shadow-2xl">
              <div className="mt-4">
                <h1 className="cursor-pointer text-lg font-semibold text-gray-700 hover:underline">
                  {application.ApplicationResponses[0].status.toUpperCase()}
                </h1>
                <div className="mt-2 flex"></div>
                <p className="text-md mt-4 text-gray-600">
                  {application.ApplicationResponses[0].responseNote}
                </p>
                <div className="flex items-center justify-between">
                  <div className="mt-4 flex items-center space-x-4 py-6">
                    <div className="">
                      <Image
                        width={60}
                        height={60}
                        className=" rounded-full"
                        src={application.ApplicationResponses[0].Profile.profileImage}
                        alt=""
                      />
                    </div>
                    <div className="text-sm font-semibold">
                      {application.ApplicationResponses[0].Profile.firstName +
                        ' ' +
                        application.ApplicationResponses[0].Profile.lastName}{' '}
                      <span className="font-normal">
                        {' '}
                        {application.ApplicationResponses[0].CreatedAt.split('T')[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  )
}

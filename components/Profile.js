import Image from 'next/image'
import UpdateProfileModal from './modals/profile/updateProfile'
import { useState } from 'react'
const files = [
  {
    title: 'transkript',
  },
  {
    title: 'özgeçmiş',
  },
  {
    title: 'transkript',
  },
]
export default function ProfileCard({ data, isInstructor }) {
  const [open, setOpen] = useState(false)
  const [response, setResponse] = useState('')
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <div className="p-16">
      <UpdateProfileModal open={open} handleClose={handleClose} profile={data} />
      <div className="mt-24 p-8 ">
        <div className="relative">
          <div className="flex flex-col">
            <div className="absolute inset-x-0 top-0 mx-auto -mt-24 flex h-36 w-36 items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shadow-2xl">
              <Image
                className="mb-3 h-24 w-24 rounded-full shadow-lg "
                src={data.profileImage}
                alt="Profile image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-28 flex flex-col items-center justify-evenly border-b pb-12">
          <button
            onClick={handleOpen}
            className="transform rounded bg-gray-700 py-2 px-4 font-medium uppercase text-white shadow transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
          >
            Edit
          </button>

          <h1 className="text-center text-4xl text-gray-700">
            {data.firstName} {data.lastName}
          </h1>
          <span className="font-light text-gray-500"> {data.number} </span>
          <span className="font-light text-gray-500"> Grade: {data.grade} </span>
          <span className="font-light text-gray-500"> GPA: {data.gpa} </span>
          <p className="mt-8 text-gray-500">{data.department}</p>
          <p className="mt-2 text-gray-500">{data.major}</p>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center">
          <h1 className="text-l font-medium text-gray-700">Biography</h1>
          <p className="text-center font-light text-gray-600 lg:px-16">{data.biography}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-l mx-auto mt-10 font-medium text-gray-700">Files</h1>

        <ol>
          {files.map((f, index) => {
            return (
              <li key={index} className="text-body-color mb-4 flex items-center text-base">
                <span className="mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full bg-black text-base text-white">
                  {index + 1}
                </span>
                {f.title}
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
                      d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
                    />
                  </svg>
                </button>
              </li>
            )
          })}
        </ol>

        {!isInstructor && (
          <div className="flex flex-col items-center">
            <div className="max-w-xl">
              <label className="flex h-32 w-full cursor-pointer appearance-none justify-center rounded-md border-2 border-dashed border-gray-300 bg-white px-4 transition hover:border-gray-400 focus:outline-none">
                <span className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <span className="font-medium text-gray-600">
                    <span>Upload new file</span>
                    <span className="text-blue-600 underline">browse</span>
                  </span>
                </span>
                <input type="file" name="file_upload" className="hidden" />
              </label>
            </div>
          </div>
        )}
      </div>

      {!isInstructor && (
        <div className="flex flex-col items-center">
          <div className="mt-5">
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
              placeholder="File Title"
              required
            />
          </div>
          <button className="mt-5 transform rounded bg-gray-700 py-2 px-4 font-medium uppercase text-white shadow transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg">
            Upload
          </button>
        </div>
      )}
    </div>
  )
}

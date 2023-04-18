const reports = [
  {
    title: 'report1',
  },
]
export default function ProgressCard({ isInstructor }) {
  return (
    <div className="flex flex-col border-b-4">
      <h1 className="text-l mt-10 font-medium text-gray-700">Progress Reports</h1>

      <ol>
        {reports.map((f, index) => {
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
            </li>
          )
        })}
      </ol>

      {!isInstructor && (
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
      )}
      {!isInstructor && (
        <div className="mb-5 flex w-4/5 flex-col items-center">
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

import Image from 'next/image'

export default function CommentsSection() {
  return (
    <section className="bg-white py-8 dark:bg-gray-900 lg:py-16">
      <div className="mx-auto max-w-2xl px-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white lg:text-2xl">
            Comments (2)
          </h2>
        </div>
        <form className="mb-6">
          <div className="mb-4 rounded-lg rounded-t-lg border border-gray-200 bg-white py-2 px-4 dark:border-gray-700 dark:bg-gray-800">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows="6"
              className="w-full border-0 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex items-center rounded-lg bg-primary-700 py-2.5 px-4 text-center text-xs font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900"
          >
            Post comment
          </button>
        </form>
        <article className="mb-6 rounded-lg bg-white p-6 text-base dark:bg-gray-900">
          <footer className="mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <p className="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
                <Image
                  className="mr-2 h-6 w-6 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  alt="Michael Gough"
                  width={100}
                  height={100}
                />
                Alperen Aydın{' '}
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                <time pubdate dateTime="2022-02-08" title="February 8th, 2022">
                  Feb. 8, 2022
                </time>
              </p>
            </div>
          </footer>
          <p className="text-gray-500 dark:text-gray-400">
            Very straight-to-point article. Really worth time reading. Thank you! But tools are just
            the instruments for the UX designers. The knowledge of the design tools are as important
            as the creation of the design strategy.
          </p>
          <div className="mt-4 flex items-center space-x-4">
            <button
              type="button"
              className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
            >
              <svg
                aria-hidden="true"
                className="mr-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strikeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              Reply
            </button>
          </div>
        </article>
        <article className="mb-6 ml-6 rounded-lg bg-white p-6 text-base dark:bg-gray-900 lg:ml-12">
          <footer className="mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <p className="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
                <Image
                  className="mr-2 h-6 w-6 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="Jese Leos"
                  width={100}
                  height={100}
                />
                Gökalp Akartepe{' '}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <time pubdate dateTime="2022-02-12" title="February 12th, 2022">
                  Feb. 12, 2022
                </time>
              </p>
            </div>
          </footer>
          <p className="text-gray-500 dark:text-gray-400">Much appreciated! Glad you liked it ☺️</p>
          <div className="mt-4 flex items-center space-x-4">
            <button
              type="button"
              className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
            >
              <svg
                aria-hidden="true"
                className="mr-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strikeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              Reply
            </button>
          </div>
        </article>
      </div>
    </section>
  )
}

import Link from 'next/link'

export default function ApplicationCard({ application, role }) {
  return (
    <div className="font-ibm flex items-center justify-between p-5 tracking-wide ">
      <Link href={`/applications/${application.ID}`} passHref>
        <button
          type="button"
          className="mb-2 rounded-lg bg-purple-700 px-5 py-2.5 text-lg text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300  "
        >
          Details
        </button>
      </Link>
    </div>
  )
}

export default function IssuesCard() {
  return (
    <div className="flex w-3/5 justify-between py-5">
      <div className="flex flex-col">
        <h5 className="mb-1 text-xl font-bold text-gray-900 ">Issues</h5>
        <span className="text-sm text-gray-500 ">Last Issue: Database</span>
      </div>
      <div className="flex flex-col items-center">
        <h5 className="mb-1 text-sm font-bold text-purple-700 ">Date : </h5>
        <h5 className="mb-1 text-sm font-bold text-purple-700 ">23.12.2022</h5>
      </div>
      <button
        type="button"
        onClick={() => {}}
        className="mx-auto ml-5 mr-5 w-1/6 transform rounded bg-gray-700 font-medium text-white shadow transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
      >
        Go To
      </button>
    </div>
  )
}

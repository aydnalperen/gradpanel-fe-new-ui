export default function NotesCard() {
  return (
    <div className="flex w-3/5 justify-between py-5">
      <div className="flex flex-col">
        <h5 className="mb-1 text-xl font-bold text-gray-900 ">Project Notes</h5>
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

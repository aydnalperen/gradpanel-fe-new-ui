import { useState } from 'react'
import UpdateProjectModal from './modals/project/updateModal'
import formatDate from '@/lib/utils/formatDate'

export default function ProjectDetailCard({ role, project, token }) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <div className="flex flex-col">
      <UpdateProjectModal open={open} handleClose={handleClose} project={project} token={token} />
      <div className="flex items-center justify-between">
        <div className="font-ibm flex flex-col ">
          <div className="flex items-center">
            <span className="text-sm text-gray-500 ">Number of students: {project.capacity}</span>
          </div>
          <span className="text-sm text-gray-500">Registered: 2 </span>
        </div>
        <span className="font-ibm text-sm font-semibold text-purple-700">
          <time dateTime={project.CreatedAt}>{formatDate(project.CreatedAt)}</time>
        </span>
      </div>
      <div className="box-border flex items-center border-b-2">
        <h5 className="mb-1 text-2xl font-bold text-gray-900 ">
          Project Title : <br /> {project.title}
        </h5>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className="font-ibm text-sm font-bold text-gray-500">Project Description</span>
        </div>
        <span className="font-ibm text-sm text-gray-500 ">{project.description}</span>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className="font-ibm text-sm font-bold text-gray-500">Sources for the project</span>
        </div>
        <span className="font-ibm text-sm text-gray-500 ">
          <ul className="ml-10 list-decimal">
            {project.Source &&
              project.Source.map((s, index) => {
                return <li key={index}>{s.link}</li>
              })}
          </ul>
        </span>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className="font-ibm text-sm font-bold text-gray-500">
            Instructor’s requirements for the project
          </span>
        </div>
        <span className="font-ibm text-sm text-gray-500 ">
          <ul className="ml-10 list-decimal	">
            {project.Requirement &&
              project.Requirement.map((s, index) => {
                return <li key={index}>{s.description}</li>
              })}
          </ul>
        </span>
      </div>
      {role === 'instructor' && (
        <button
          type="button"
          onClick={handleOpen}
          className="mx-auto mt-5 w-1/3 transform rounded bg-gray-700 py-2 px-4 font-medium uppercase text-white shadow transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
        >
          Edit
        </button>
      )}
    </div>
  )
}

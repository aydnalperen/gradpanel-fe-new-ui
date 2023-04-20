import { useState } from 'react'
import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { TextField } from '@mui/material'
import { API_URL } from '../../../lib/constants'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: 360,
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxHeight: 600,
  overflow: 'auto',
}

export default function UpdateProjectModal({ open, handleClose, project, token }) {
  const [title, setTitle] = useState(project.title)
  const [description, setDescription] = useState(project.description)
  const [capacity, setCapacity] = useState(project.capacity)

  const [newSource, setNewSource] = useState('')
  const [newReq, setNewReq] = useState('')

  const updateProjectHandler = async () => {
    let body = {
      ID: project.ID,
      title: title,
      categoryId: 1,
      description: description,
      capacity: parseInt(capacity),
    }
    const endpoint = API_URL + '/protected/project/'

    const options = {
      method: 'PUT',
      mode: 'cors',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(body),
    }
    let response = await fetch(endpoint, options)

    if (response.status == 200) toast.success('Project updated!')
    else toast.error('Unknown error!')

    return response
  }
  const addSourceHandler = async () => {
    let body = {
      link: newSource,
      projectID: project.ID,
    }
    const endpoint = API_URL + '/protected/source/'

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

    if (response.status == 200) toast.success('Source added!')
    else toast.error('Unknown error!')

    return response
  }
  const addRequirementHandler = async () => {
    let body = {
      description: newReq,
      projectID: project.ID,
    }
    const endpoint = API_URL + '/protected/requirement/'

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

    if (response.status == 200) toast.success('Requirement added!')
    else toast.error('Unknown error!')

    return response
  }
  const deleteSourceHandler = async (id) => {
    let body = {
      id: id,
    }
    const endpoint = API_URL + '/protected/source/'

    const options = {
      method: 'DELETE',
      mode: 'cors',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(body),
    }
    let response = await fetch(endpoint, options)

    if (response.status == 200) toast.success('Source deleted!')
    else toast.error('Unknown error!')

    return response
  }
  const deleteRequirementHandler = async (id) => {
    let body = {
      id: id,
    }
    const endpoint = API_URL + '/protected/requirement/'

    const options = {
      method: 'DELETE',
      mode: 'cors',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(body),
    }
    let response = await fetch(endpoint, options)

    if (response.status == 200) toast.success('Requirement deleted!')
    else toast.error('Unknown error!')

    return response
  }
  return (
    <div
      id="defaultModal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 hidden h-[calc(100%-1rem)] w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full"
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <ToastContainer />
            <TextField
              defaultValue={project.title}
              id="fullWidth"
              variant="standard"
              label="title"
              fullWidth
              onChange={(e) => {
                setTitle(e.target.value)
              }}
            />
            <TextField
              defaultValue={project.description}
              id="fullWidth"
              variant="standard"
              label="description"
              fullWidth
              multiline
              rows={3}
              onChange={(e) => {
                setDescription(e.target.value)
              }}
            />
            <TextField
              defaultValue={project.capacity}
              id="fullWidth"
              variant="standard"
              label="Number of students"
              fullWidth
              type="number"
              onChange={(e) => {
                setCapacity(e.target.value)
              }}
            />
            <div className="flex flex-col items-center">
              <button
                type="button"
                onClick={updateProjectHandler}
                className="font-small mt-5 w-1/4 transform rounded bg-gray-700 text-white shadow transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
              >
                Update
              </button>
            </div>
          </div>
          <div>
            <div>
              <span className="font-ibm text-sm font-bold text-gray-500">
                Sources for the project
              </span>
              <div className="flex">
                <TextField
                  defaultValue="Add new"
                  id="fullWidth"
                  variant="standard"
                  fullWidth
                  size="small"
                  onChange={(e) => {
                    setNewSource(e.target.value)
                  }}
                />
                <button
                  type="button"
                  onClick={addSourceHandler}
                  className="w-1/6 transform rounded bg-gray-700 p-2 text-white shadow transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
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
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
              <ul className="ml-10 list-decimal">
                {project.Source &&
                  project.Source.map((s, index) => {
                    return (
                      <li key={index} className="my-5">
                        <div className="flex">
                          <TextField
                            defaultValue={s.link}
                            id="fullWidth"
                            variant="standard"
                            fullWidth
                            size="small"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              deleteSourceHandler(s.ID)
                            }}
                            className="ml-2 w-1/6 transform rounded bg-gray-700 p-2 text-white shadow transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
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
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>
                      </li>
                    )
                  })}
              </ul>
            </div>
            <div>
              <span className="font-ibm text-sm font-bold text-gray-500">
                Requirements for the project
              </span>
              <div className="flex">
                <TextField
                  defaultValue="Add new"
                  id="fullWidth"
                  variant="standard"
                  fullWidth
                  size="small"
                  onChange={(e) => {
                    setNewReq(e.target.value)
                  }}
                />
                <button
                  type="button"
                  onClick={addRequirementHandler}
                  className="w-1/6 transform rounded bg-gray-700 p-2 text-white shadow transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
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
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
              <ul className="ml-10 list-decimal">
                {project.Requirement &&
                  project.Requirement.map((s, index) => {
                    return (
                      <li key={index} className="my-5">
                        <div className="flex">
                          <TextField
                            defaultValue={s.description}
                            id="fullWidth"
                            variant="standard"
                            fullWidth
                            size="small"
                          />

                          <button
                            type="button"
                            onClick={() => {
                              deleteRequirementHandler(s.ID)
                            }}
                            className="ml-2 w-1/6 transform rounded bg-gray-700 p-2 text-white shadow transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
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
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>
                      </li>
                    )
                  })}
              </ul>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

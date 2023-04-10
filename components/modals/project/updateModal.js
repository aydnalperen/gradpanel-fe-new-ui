import { useState } from 'react'
import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { TextField } from '@mui/material'
import { API_URL } from '../../../lib/constants'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '%100',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxHeight: '%100',
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

    return response
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <TextField
              defaultValue={project.title}
              id="fullWidth"
              variant="filled"
              label="title"
              fullWidth
              onChange={(e) => {
                setTitle(e.target.value)
              }}
            />
            <TextField
              defaultValue={project.description}
              id="fullWidth"
              variant="filled"
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
              variant="filled"
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
                className="mt-5 w-1/6 transform rounded bg-gray-700 font-medium text-white shadow transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
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
                  variant="filled"
                  fullWidth
                  size="small"
                  onChange={(e) => {
                    setNewSource(e.target.value)
                  }}
                />
                <button
                  type="button"
                  onClick={addSourceHandler}
                  className="mx-auto ml-5 mr-5 w-1/6 transform rounded bg-gray-700 font-medium text-white shadow transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
                >
                  Add
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
                            variant="filled"
                            fullWidth
                            size="small"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              deleteSourceHandler(s.ID)
                            }}
                            className="mx-auto ml-5 mr-5 w-1/6 transform rounded bg-gray-700 font-medium text-white shadow transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
                          >
                            Delete
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
                  variant="filled"
                  fullWidth
                  size="small"
                  onChange={(e) => {
                    setNewReq(e.target.value)
                  }}
                />
                <button
                  type="button"
                  onClick={addRequirementHandler}
                  className="mx-auto ml-5 mr-5 w-1/6 transform rounded bg-gray-700 font-medium text-white shadow transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
                >
                  Add
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
                            variant="filled"
                            fullWidth
                            size="small"
                          />

                          <button
                            type="button"
                            onClick={() => {
                              deleteRequirementHandler(s.ID)
                            }}
                            className="mx-auto ml-5 mr-5 w-1/6 transform rounded bg-gray-700 font-medium text-white shadow transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
                          >
                            Delete
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

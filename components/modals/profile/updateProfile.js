import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { TextField } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { API_URL } from '@/lib/constants'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 360,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxHeight: 800,
  overflow: 'auto',
}

export default function UpdateProfileModal({ open, handleClose, profile, token }) {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [major, setMajor] = React.useState('')
  const [grade, setGrade] = React.useState('')
  const [number, setNumber] = React.useState('')
  const [gpa, setGpa] = React.useState('')
  const [biography, setBiography] = React.useState('')

  const updateProjectHandler = async () => {
    let body = {
      firstName: firstName,
      lastName: lastName,
      major: major,
      grade: grade,
      number: number,
      gpa: gpa,
      biography: biography,
    }
    const endpoint = API_URL + '/protected/profile/'

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

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ToastContainer />
          <div>
            <div>
              <label
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="file_input"
              >
                Upload Profile Image
              </label>
              <div className="mb-5 flex items-center">
                <input
                  className="block w-1/2 cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none"
                  id="file_input"
                  type="file"
                />
                <button
                  type="button"
                  onClick={() => {}}
                  className="transform rounded bg-gray-700 p-2 font-medium text-white shadow transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
                >
                  Save Image
                </button>
              </div>
            </div>
            <TextField
              defaultValue={profile.firstName}
              id="fullWidth"
              variant="standard"
              label="First Name"
              fullWidth
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
            />
            <TextField
              defaultValue={profile.lastName}
              id="fullWidth"
              variant="standard"
              label="Last Name"
              fullWidth
              onChange={(e) => {
                setLastName(e.target.value)
              }}
            />
            <TextField
              defaultValue={profile.major}
              id="fullWidth"
              variant="standard"
              label="Major"
              fullWidth
              onChange={(e) => {
                setMajor(e.target.value)
              }}
            />
            <TextField
              defaultValue={profile.grade}
              id="fullWidth"
              variant="standard"
              label="Grade"
              fullWidth
              type="number"
              onChange={(e) => {
                setGrade(e.target.value)
              }}
            />
            <TextField
              defaultValue={profile.number}
              id="fullWidth"
              variant="standard"
              label="Student ID"
              fullWidth
              onChange={(e) => {
                setNumber(e.target.value)
              }}
            />
            <TextField
              defaultValue={profile.gpa}
              id="fullWidth"
              variant="standard"
              label="GPA"
              fullWidth
              type="number"
              onChange={(e) => {
                setGpa(e.target.value)
              }}
            />
            <TextField
              defaultValue={profile.biography}
              id="fullWidth"
              variant="standard"
              label="Biography"
              fullWidth
              rows={3}
              multiline
              onChange={(e) => {
                setBiography(e.target.value)
              }}
            />

            <div className="flex flex-col items-center">
              <button
                type="button"
                onClick={updateProjectHandler}
                className="mt-5 w-1/4 transform rounded bg-gray-700 p-2 text-white shadow transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
              >
                Update
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

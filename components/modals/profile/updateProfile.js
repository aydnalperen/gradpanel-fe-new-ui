import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { TextField } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxHeight: 800,
  overflow: 'auto',
}

export default function UpdateProfileModal({ open, handleClose, profile }) {
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
              variant="filled"
              label="First Name"
              fullWidth
            />
            <TextField
              defaultValue={profile.lastName}
              id="fullWidth"
              variant="filled"
              label="Last Name"
              fullWidth
            />
            <TextField
              defaultValue={profile.department}
              id="fullWidth"
              variant="filled"
              label="Department"
              fullWidth
            />
            <TextField
              defaultValue={profile.major}
              id="fullWidth"
              variant="filled"
              label="Major"
              fullWidth
            />
            <TextField
              defaultValue={profile.grade}
              id="fullWidth"
              variant="filled"
              label="Grade"
              fullWidth
              type="number"
            />
            <TextField
              defaultValue={profile.number}
              id="fullWidth"
              variant="filled"
              label="Student ID"
              fullWidth
            />
            <TextField
              defaultValue={profile.gpa}
              id="fullWidth"
              variant="filled"
              label="GPA"
              fullWidth
              type="number"
            />
            <TextField
              defaultValue={profile.biography}
              id="fullWidth"
              variant="filled"
              label="Biography"
              fullWidth
              rows={3}
              multiline
            />

            <div className="flex flex-col items-center">
              <button
                type="button"
                onClick={() => {}}
                className="mt-5 w-1/6 transform rounded bg-gray-700 p-2 font-medium text-white shadow transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
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

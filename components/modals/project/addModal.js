import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import { TextField } from '@mui/material'
import { useState } from 'react'
import { API_URL } from '../../../lib/constants'
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
  maxHeight: 600,
  overflow: 'auto',
}

export default function AddProjectModal({ open, categories, handleClose, token }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [capacity, setCapacity] = useState('0')
  const [category, setCategory] = useState({ ID: 0, type: 'Category' })
  const addProjectHandler = async () => {
    let body = {
      title: title,
      description: description,
      capacity: parseInt(capacity),
      categoryId: category.ID,
    }
    const endpoint = API_URL + '/protected/project/'

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
              id="fullWidth"
              variant="filled"
              label="title"
              fullWidth
              onChange={(e) => {
                setTitle(e.target.value)
              }}
            />
            <TextField
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
              id="fullWidth"
              variant="filled"
              label="Number of students"
              fullWidth
              type="number"
              onChange={(e) => {
                setCapacity(e.target.value)
              }}
            />
            <div className="mt-5">
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Category"
                onChange={(e) => {
                  setCategory(e.target.value)
                }}
              >
                <MenuItem value={''}>All</MenuItem>
                {categories.map((c, index) => {
                  return (
                    <MenuItem key={index} value={c.type}>
                      {c.type}
                    </MenuItem>
                  )
                })}
              </Select>
            </div>

            <div className="flex flex-col items-center">
              <button
                type="button"
                onClick={addProjectHandler}
                className="mt-5 w-1/6 transform rounded bg-gray-700 font-medium text-white shadow transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
              >
                Add New Project
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

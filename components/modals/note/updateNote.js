import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { TextareaAutosize, TextField } from '@mui/material'
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

export default function UpdateNoteModal({ open, handleClose, note, token }) {
  const [title, setTitle] = useState(note.title)
  const [text, setText] = useState(note.text)

  const updateNoteHandler = async () => {
    let body = {
      id: note.ID,
      text: text,
      title: title,
    }
    const endpoint = API_URL + '/protected/meetingNote/'

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
              defaultValue={note.title}
              id="fullWidth"
              variant="filled"
              label="Note Title"
              fullWidth
              onChange={(e) => {
                setTitle(e.target.value)
              }}
            />
            <TextField
              defaultValue={note.text}
              id="fullWidth"
              variant="filled"
              label="Content"
              fullWidth
              rows={3}
              multiline
              onChange={(e) => {
                setText(e.target.value)
              }}
            />

            <div className="flex flex-col items-center">
              <button
                type="button"
                onClick={updateNoteHandler}
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

import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
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

export default function UpdateMeetingModal({ open, handleClose, meeting, token }) {
  const [title, setTitle] = useState(meeting.title)
  const [text, setText] = useState(meeting.text)
  const updateMeetingHandler = async (id) => {
    let body = {
      id: id,
      title: title,
      text: text,
    }
    const endpoint = API_URL + '/protected/meeting/'

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
          <TextField
            id="fullWidth"
            variant="filled"
            label="Title"
            fullWidth
            defaultValue={title}
            placeholder={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            id="fullWidth"
            variant="filled"
            label="Link"
            fullWidth
            defaultValue={text}
            placeholder={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="flex">
            <button
              type="button"
              onClick={() => {
                updateMeetingHandler(meeting.ID)
              }}
              className="m-auto mt-5 transform rounded bg-gray-700 p-2 font-medium text-white shadow transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
            >
              Update
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

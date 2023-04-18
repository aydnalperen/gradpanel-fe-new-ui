import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import RequestCard from './applicationCard'
import Image from 'next/image'
import formatDate from '@/lib/utils/formatDate'
import Link from 'next/link'

function Row({ request, role }) {
  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell component="th" scope="row">
          <div className="flex items-center py-5">
            <span className="text-md pl-5  text-gray-500">
              {request.Profile.firstName} {request.Profile.lastName}
            </span>
          </div>
        </TableCell>

        <TableCell component="th" scope="row">
          <time dateTime={request.CreatedAt}>{formatDate(request.CreatedAt)}</time>
        </TableCell>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Link href={`/applications/${request.ID}`} passHref>
            <button
              type="button"
              className="mb-2 rounded-lg bg-purple-700 px-5 py-2.5 text-lg text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300  "
            >
              Details
            </button>
          </Link>
        </TableCell>
      </TableRow>
    </>
  )
}

function ProjectRequestsTable({ header, requests, role }) {
  const [open, setOpen] = React.useState(false)

  let statusRequests = {}

  requests.forEach((r) => {
    try {
      statusRequests[r.status].push(r)
    } catch {
      statusRequests[r.status] = []
      statusRequests[r.status].push(r)
    }
  })

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell component="th" scope="row">
          <h5 className="font-ibm text-xl font-bold text-gray-900 ">{header}</h5>
        </TableCell>
        <TableCell component="th" scope="row">
          <h5 className="font-ibm text-sm font-bold text-yellow-500 ">
            Pending: {statusRequests['pending'] ? statusRequests['pending'].length : 0}
          </h5>
          <h5 className="font-ibm text-sm font-bold text-green-500 ">
            Accepted: {statusRequests['accepted'] ? statusRequests['accepted'].length : 0}
          </h5>
          <h5 className="font-ibm text-sm font-bold text-red-500 ">
            Rejected: {statusRequests['rejected'] ? statusRequests['rejected'].length : 0}
          </h5>
          <h5 className="text-grey-500 font-ibm text-sm font-bold ">
            Total:{' '}
            {(statusRequests['pending'] ? statusRequests['pending'].length : 0) +
              (statusRequests['accepted'] ? statusRequests['accepted'].length : 0) +
              (statusRequests['rejected'] ? statusRequests['rejected'].length : 0)}
          </h5>
        </TableCell>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
                <TableBody>
                  <ProjectRequestsStatusTable
                    header={'Pending Applications'}
                    requests={statusRequests['pending']}
                    role={role}
                  />
                  <ProjectRequestsStatusTable
                    header={'Accepted Applications'}
                    requests={statusRequests['accepted']}
                    role={role}
                  />
                  <ProjectRequestsStatusTable
                    header={'Rejected Applications'}
                    requests={statusRequests['rejected']}
                    role={role}
                  />
                </TableBody>
              </Table>
            </TableContainer>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}
function ProjectRequestsStatusTable({ header, requests, role }) {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell component="th" scope="row">
          <h5 className="font-ibm text-xl font-bold text-gray-900 ">{header}</h5>
        </TableCell>
        <TableCell component="th" scope="row">
          <h5 className="text-l font-ibm font-bold text-gray-900 ">
            Total Applicants : {requests && requests.length}
          </h5>
        </TableCell>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
                <TableBody>
                  {requests &&
                    requests.map((r, index) => {
                      return <Row key={index} request={r} role={role} />
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}
export default function ApplicationsTable({ data, role }) {
  let requests = {}

  data.forEach((r) => {
    try {
      requests[r.Project.title].push(r)
    } catch {
      requests[r.Project.title] = []
      requests[r.Project.title].push(r)
    }
  })

  let keys = Object.keys(requests)

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableBody>
          {keys &&
            keys.map((k, index) => {
              return (
                <ProjectRequestsTable key={index} header={k} requests={requests[k]} role={role} />
              )
            })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

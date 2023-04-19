import path from 'path'
import getAllFilesRecursively from './utils/files'
// Remark packages

import { API_URL } from './constants'

const root = process.cwd()

export async function getFileBySlug(token, projectId) {
  const endpoint = API_URL + '/protected/project/details?id=' + projectId

  const options = {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + token,
    },
  }
  let response = await fetch(endpoint, options)
  let json = await response.json()
  let data
  if (response.status == 404) data = {}
  else if (response.status == 400) data = {}
  else data = json.data

  return data
}
export async function getApplicationById(token, applicationId) {
  const endpoint = API_URL + '/protected/application?id=' + applicationId

  const options = {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + token,
    },
  }
  let response = await fetch(endpoint, options)
  let json = await response.json()
  let data
  if (response.status == 404) data = {}
  else if (response.status == 400) data = {}
  else data = json

  return data
}
export async function getApplicationsByToken(token) {
  const endpoint = API_URL + '/protected/application/by-token'

  const options = {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + token,
    },
  }
  let response = await fetch(endpoint, options)
  let json = await response.json()
  let data
  if (response.status == 404) data = {}
  else if (response.status == 400) data = {}
  else data = json.data

  return data
}
export async function getNotesByProject(token, projectId) {
  const endpoint = API_URL + '/protected/meetingNote?id=' + projectId

  const options = {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + token,
    },
  }
  let response = await fetch(endpoint, options)
  let json = await response.json()
  let data
  if (response.status == 404) data = {}
  else if (response.status == 400) data = {}
  else data = json.data

  return data
}
export async function getActiveProjectByToken(token) {
  const endpoint = API_URL + '/protected/project/open-projects'

  const options = {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + token,
    },
  }
  let response = await fetch(endpoint, options)
  let json = await response.json()
  let data
  if (response.status == 404) data = {}
  else if (response.status == 400) data = {}
  else data = json.data
  return data
}
export async function getProfileByToken(token) {
  const endpoint = API_URL + '/protected/profile/by-token'

  const options = {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + token,
    },
  }
  let response = await fetch(endpoint, options)
  let json = await response.json()
  let data
  if (response.status == 404) data = {}
  else if (response.status == 400) data = {}
  else data = json.data

  return data
}

export async function getAllProjects(token) {
  const endpoint = API_URL + '/protected/project/all'

  const options = {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + token,
    },
  }
  let response = await fetch(endpoint, options)
  let json = await response.json()
  let data
  if (response.status == 404) data = {}
  else if (response.status == 400) data = {}
  else data = json.data

  return data
}
export async function getCategories(token) {
  const endpoint = API_URL + '/protected/category/all'

  const options = {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + token,
    },
  }
  let response = await fetch(endpoint, options)
  let json = await response.json()
  let data
  if (response.status == 404) data = {}
  else if (response.status == 400) data = {}
  else data = json.data

  return data
}

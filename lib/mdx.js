import { bundleMDX } from 'mdx-bundler'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import readingTime from 'reading-time'
import { visit } from 'unist-util-visit'
import getAllFilesRecursively from './utils/files'
// Remark packages

import { API_URL } from '../lib/constants'

const root = process.cwd()

export function getFiles(type) {
  const prefixPaths = path.join(root, 'data', type)
  const files = getAllFilesRecursively(prefixPaths)
  // Only want to return blog/path and ignore root, replace is needed to work on Windows
  return files.map((file) => file.slice(prefixPaths.length + 1).replace(/\\/g, '/'))
}

export function formatSlug(slug) {
  return slug.replace(/\.(mdx|md)/, '')
}

export function dateSortDesc(a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

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

export async function getAllFilesFrontMatter(token) {
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

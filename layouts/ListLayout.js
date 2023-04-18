import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import AddProjectModal from '@/components/modals/project/addModal'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
export default function ListLayout({
  posts,
  title,
  initialDisplayPosts = [],
  pagination = null,
  categories = null,
  token = null,
}) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [searchValue, setSearchValue] = useState('')
  const [searchCategory, setSearchCategory] = useState('')
  const [searchInstructor, setSearchInstructor] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.description
    const isSearchValueMatched =
      searchValue === '' || searchContent.toLowerCase().includes(searchValue.toLowerCase())
    const isSearchCategoryMatched =
      searchCategory === '' ||
      (frontMatter.Category && frontMatter.Category.type === searchCategory)
    return isSearchValueMatched && isSearchCategoryMatched
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue && !searchCategory
      ? initialDisplayPosts
      : filteredBlogPosts

  return (
    <>
      <AddProjectModal
        open={open}
        handleClose={handleClose}
        token={token}
        categories={categories}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <div className="flex flex-col	">
            <div className="relative max-w-lg">
              <input
                aria-label="Search projects"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search projects"
                className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
              />
              <svg
                className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="mt-5">
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={searchCategory}
                label="Category"
                onChange={(e) => {
                  setSearchCategory(e.target.value)
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
            <div className="mt-5">
              <InputLabel id="demo-simple-select-label-2">Instructor</InputLabel>
              <Select
                labelId="demo-simple-select-label-2"
                id="demo-simple-select-2"
                value={searchInstructor}
                label="Instructor"
                onChange={(e) => {
                  setSearchInstructor(e.target.value)
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
          </div>
          <div className="	">
            <Fab variant="extended" onClick={handleOpen}>
              <AddIcon sx={{ mr: 1 }} />
              Add New Project
            </Fab>
          </div>
        </div>

        <ul>
          {!filteredBlogPosts.length && 'No projects found.'}
          {displayPosts.map((frontMatter) => {
            const { ID, CreatedAt, title, description, Profile, Category } = frontMatter
            return (
              <li key={ID} className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <div className="text-gray-9v00 prose max-w-none dark:text-gray-400">
                        {Profile.firstName + ' ' + Profile.lastName}
                      </div>
                    </dd>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={CreatedAt}>{formatDate(CreatedAt)}</time>
                    </dd>
                  </dl>
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link href={`/projects/${ID}`} className="text-gray-900 dark:text-gray-100">
                          {title}
                        </Link>
                      </h3>
                      <div className="flex flex-wrap">
                        <Tag text={Category.type} />
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {description.slice(0, 70) + '...'}
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}

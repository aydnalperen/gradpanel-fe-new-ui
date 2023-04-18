import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { useState } from 'react'
import UpdateProjectModal from '../components/modals/project/updateModal'
import MeetingCard from '@/components/startedProject/meetingCard'
import AccessLinksCard from '@/components/startedProject/accessLinksCard'
import NotesCard from '@/components/notes/notesCard'
import ProgressCard from '@/components/startedProject/progressCard'
import CommentsSection from '@/components/startedProject/comments'
import ApplicationsTable from '@/components/application'
const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, token, isActive }) {
  const { Profile } = frontMatter
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <UpdateProjectModal
        open={open}
        handleClose={handleClose}
        project={frontMatter}
        token={token}
      />

      <article>
        <div className="xl:divide-y  xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={frontMatter.CreatedAt}>
                      {new Date(frontMatter.CreatedAt).toLocaleDateString(
                        siteMetadata.locale,
                        postDateTemplate
                      )}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{frontMatter.title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <dl className="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
              <dd>
                <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                  <li className="flex items-center space-x-2" key={Profile.ID}>
                    {Profile.profileImage && (
                      <Image
                        src={Profile.profileImage}
                        width="38px"
                        height="38px"
                        alt="avatar"
                        className="h-10 w-10 rounded-full"
                      />
                    )}
                    <dl className="whitespace-nowrap text-sm font-medium leading-5">
                      <dt className="sr-only">Name</dt>
                      <dd className="text-gray-900 dark:text-gray-100">
                        {Profile.firstName + ' ' + Profile.lastName}
                      </dd>
                      <dt className="sr-only">Twitter</dt>
                      <dd>
                        {Profile.twitter && (
                          <Link
                            href={Profile.twitter}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          >
                            {Profile.twitter.replace('https://twitter.com/', '@')}
                          </Link>
                        )}
                      </dd>
                    </dl>
                  </li>
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className=" max-w-none pt-5 pb-5 dark:prose-dark">
                Number of students: {frontMatter.capacity}
              </div>
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">
                {frontMatter.description}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="font-ibm text-sm font-bold text-gray-500">
                    Sources for the project
                  </span>
                </div>
                <span className="font-ibm text-sm text-gray-500 ">
                  <ul className="ml-10 list-decimal">
                    {frontMatter.Source &&
                      frontMatter.Source.map((s, index) => {
                        return <li key={index}>{s.link}</li>
                      })}
                  </ul>
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="font-ibm text-sm font-bold text-gray-500">
                    Instructor’s requirements for the project
                  </span>
                </div>
                <span className="font-ibm text-sm text-gray-500 ">
                  <ul className="ml-10 list-decimal	">
                    {frontMatter.Requirement &&
                      frontMatter.Requirement.map((s, index) => {
                        return <li key={index}>{s.description}</li>
                      })}
                  </ul>
                </span>
              </div>
              <div>
                {isActive && (
                  <>
                    <MeetingCard isInstructor={true} meeting={frontMatter.Meeting[0]} />
                    <AccessLinksCard links={frontMatter.Link} />
                    <NotesCard projectId={frontMatter.ID} />
                    <ProgressCard />
                    <CommentsSection comments={frontMatter.Comments} />
                  </>
                )}
              </div>
            </div>
            <footer>
              <div className="pt-4 xl:pt-8">
                <Link
                  href="/projects"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  &larr; Back to the projects
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={handleOpen}
                  className="mx-auto mt-5 w-1/3 transform rounded bg-gray-700 py-2 px-4 font-medium uppercase text-white shadow transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
                >
                  Edit
                </button>
              </div>
            </footer>
          </div>
          <ApplicationsTable data={frontMatter.Application} role="instructor" />
        </div>
      </article>
    </SectionContainer>
  )
}

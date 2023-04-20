import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

export default function AuthorLayout({ frontMatter }) {
  const { Profile, CreatedAt, title, text, Project } = frontMatter

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
            {title}
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image
              src={Profile.profileImage}
              alt="avatar"
              width="144px"
              height="144px"
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {Profile.firstName + ' ' + Profile.lastName}
            </h3>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{text}</div>
        </div>
      </div>
    </>
  )
}

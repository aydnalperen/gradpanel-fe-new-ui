import ProfileCard from '@/components/profile'
import { getProfileByToken } from '@/lib/mdx'

export async function getServerSideProps(context) {
  const token = context.req.cookies['GradPanelJWT']

  const profile = await getProfileByToken(token)
  return { props: { profile, token } }
}

export default function About({ profile, token }) {
  return <ProfileCard data={profile} isInstructor={false} />
}

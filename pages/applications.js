import ApplicationsTable from '@/components/application'
import { getApplicationsByToken } from '@/lib/mdx'

export async function getServerSideProps(context) {
  const token = context.req.cookies['GradPanelJWT']

  const applications = await getApplicationsByToken(token)
  return { props: { applications, token } }
}

export default function Applications({ applications, token }) {
  return <ApplicationsTable data={applications} role="instructor" />
}

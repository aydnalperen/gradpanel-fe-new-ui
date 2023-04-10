import PageTitle from '@/components/PageTitle'
import { getApplicationById } from '@/lib/mdx'
import ApplicationDetailCard from '@/components/application/applicationDetail'
export async function getServerSideProps(context) {
  const token = context.req.cookies['GradPanelJWT']
  const params = context.params

  const post = await getApplicationById(token, params.applicationId)
  console.log(post)
  return { props: { post, token } }
}

export default function ApplicationDetail({ post, token }) {
  return (
    <>
      {post != null ? (
        <ApplicationDetailCard application={post} token={token} />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  )
}

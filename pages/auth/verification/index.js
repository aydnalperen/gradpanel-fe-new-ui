import VerifCard from '../../../components/verification/verifCard'
import { useRouter } from 'next/router'

export default function VerificationPage() {
  const router = useRouter()
  const { mail } = router.query
  return (
    <>
      <VerifCard mail={mail} />
    </>
  )
}

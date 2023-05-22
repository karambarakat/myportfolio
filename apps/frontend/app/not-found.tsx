import QuickMessage from '@ws/ui/components/QuickMessage'
import { useRouter } from 'next/router'
// not working, only works for [slug] paths when `notFound` function being called
// go to pages/404.tsx
export default function NotFound() {
  const router = useRouter()
  return (
    <QuickMessage
      code="404"
      message="This page could not be found."
      actions={
        [{ display: 'go home', fn: () => router.push('/') }]
        // <Link className="mt-6" href="/">
        // go home
        // </Link>
      }
    />
  )
}

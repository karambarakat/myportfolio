import QuickMessage from '@/components/QuickMessage'
import Link from 'next/link'
import { notFound } from 'next/navigation'
// not working, only works for [slug] paths when `notFound` function being called
// go to pages/404.tsx
export default function NotFound() {
  return (
    <QuickMessage
      code="404"
      message="This page could not be found."
      action={
        <Link className="mt-6" href="/">
          go home
        </Link>
      }
    />
  )
}

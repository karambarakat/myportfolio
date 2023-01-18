import { notFound } from 'next/navigation'
// not working, only works for [slug] paths when `notFound` function being called
// go to pages/404.tsx
export default function NotFound() {
  return <div>404 | This page could not be found.</div>
}

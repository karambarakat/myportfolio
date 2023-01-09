import './_tailwind.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  )
}

import InnerLayout from './InnerLayout'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <html>
      <head />
      <body>
        <InnerLayout>{children}</InnerLayout>
      </body>
    </html>
  )
}

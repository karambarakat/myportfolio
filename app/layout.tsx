import InnerLayout from './InnerLayout'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <html>
      <head />
      <body>
        <InnerLayout>
          {children}
          <div className="flex-1"></div>
        </InnerLayout>
      </body>
    </html>
  )
}

'use client' //todo: remove this line; I make @ws/ui/utils/actionMap to be able to pass Element to client components from server component
import QuickMessage from '@ws/ui/components/QuickMessage'
import { Provider, useAddAction } from '@ws/ui/utils/actionMap'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'

const id = uuidv4()

export default function NotFound() {
  return (
    <Provider
      value={[
        { id, display: 'go home', Element: p => <Link href="/" {...p} /> }
      ]}
    >
      <QuickMessage
        code="404"
        message="This page could not be found."
        actions={[id]}
      />
    </Provider>
  )
}

'use client'

import QuickMessage from '@ws/ui/components/QuickMessage'
import { useAddAction } from '@ws/ui/utils/actionMap'
import { v4 as uuid } from 'uuid'

const id = uuid()

export default function GlobalError({
  error,
  reset
}: {
  error: Error
  reset: () => void
}) {
  useAddAction({ id, display: 'reload', fn: () => reset() })
  return (
    <html>
      <body>
        <QuickMessage code="500" actions={[id]} />
      </body>
    </html>
  )
}

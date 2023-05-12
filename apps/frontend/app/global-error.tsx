'use client'

import QuickMessage from '@ws/ui/components/QuickMessage'

export default function GlobalError({
  error,
  reset
}: {
  error: Error
  reset: () => void
}) {
  return (
    <html>
      <body>
        <QuickMessage
          code="500"
          action={
            <button className="mt-6" onClick={() => reset()}>
              reload
            </button>
          }
        />
      </body>
    </html>
  )
}

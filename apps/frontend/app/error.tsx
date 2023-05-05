'use client'

import Separator from '@/components/Separator'

import QuickMessage from '@/components/QuickMessage'

interface Props {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: Props) {
  return (
    <QuickMessage
      code="500"
      action={
        <button className="mt-6" onClick={() => reset()}>
          reload
        </button>
      }
    />
  )
}

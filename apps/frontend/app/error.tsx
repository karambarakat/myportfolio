'use client' // error component must be client component
import QuickMessage from '@ws/ui/components/QuickMessage'
import { useAddAction } from '@ws/ui/utils/actionMap'
import { v4 as uuid } from 'uuid'

interface Props {
  error: Error
  reset: () => void
}

const id = uuid()

export default function Error({ error, reset }: Props) {
  useAddAction({ id, display: 'reload', fn: () => reset() })
  return <QuickMessage code="500" actions={[id]} />
}

'use client'

interface Props {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: Props) {
  return (
    <div>
      <p>Something went wrong!</p>
      <button onClick={() => reset()}>reload</button>
    </div>
  )
}

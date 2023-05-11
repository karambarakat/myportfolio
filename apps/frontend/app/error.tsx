'use client' // error component must be client component
// import QuickMessage from '@ws/ui/components/QuickMessage'
import Test from '@ws/ui/components/Test'

interface Props {
  error: Error
  reset: () => void
}

export default function Error() {
  return (
    <Test />
    // <QuickMessage
    //   code="500"
    //   action={
    //     <button className="mt-6" onClick={() => reset()}>
    //       reload
    //     </button>
    //   }
    // />
  )
}

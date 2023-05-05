import Separator from '@/components/Separator'

export default function QuickMessage({
  code = 'Ops!',
  message = 'Something went wrong?',
  action,
}: {
  code?: string
  message?: string
  action?: React.ReactNode
}) {
  return (
    <div className="flex-1 text-lg grid place-content-center place-items-center">
      <div className="flex gap-4 justify-center items-center">
        <div>{code}</div>
        <Separator size={{ height: '48px' }} />
        <div>{message}</div>
      </div>
      {action}
    </div>
  )
}

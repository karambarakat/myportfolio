// import Separator from './Separator'

export default function QuickMessage({
  code = 'Ops!',
  message = 'Something went wrong?',
  actions,
}: {
  code?: string
  message?: string
  actions?: { fn?: () => any; display: string }[]
}) {
  return (
    <div className="flex-1 h-full text-lg grid place-content-center place-items-center">
      <div className="flex gap-4 justify-center items-center">
        <div>{code}</div>
        <div>{message}</div>
      </div>
      {actions && (
        <div className="mt-4 flex gap-4">
          {actions.map((action, index) => (
            <button key={index} onClick={() => action.fn?.()}>
              {action.display}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

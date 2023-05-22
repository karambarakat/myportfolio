import { MapActionIds as MapActionIds, useActions } from '../utils/actionMap'

export default function QuickMessage({
  code = 'Ops!',
  message = 'Something went wrong?',
  actions,
}: {
  code?: string
  message?: string
  actions?: MapActionIds[]
}) {
  const actions_ = useActions(actions || [])

  return (
    <div className="flex-1 h-full text-lg grid place-content-center place-items-center">
      <div className="flex gap-4 justify-center items-center">
        <div>{code}</div>
        <div>{message}</div>
      </div>
      {actions_?.length !== 0 && (
        <div className="mt-4 flex gap-4">
          {actions_.map((action, index) => {
            if (!action.Element)
              return (
                <button key={index} onClick={() => action.fn?.()}>
                  {action.display}
                </button>
              )
            return (
              <action.Element key={index} onClick={() => action.fn?.()}>
                {action.display || ''}
              </action.Element>
            )
          })}
        </div>
      )}
    </div>
  )
}

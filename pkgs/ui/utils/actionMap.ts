import { createContext, useContext, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

export interface Action {
  id: string
  display?: string
  Element?: React.ComponentType<{ onClick: () => void; children: string }>
  fn?: () => void
}

export type MapActionIds = string

const context = createContext<Action[]>([])
export const Provider = context.Provider

export const useAction = (id: MapActionIds) => {
  return useContext(context).find((a) => a.id === id)
}

export const useActions = (ids: MapActionIds[]) => {
  return useContext(context).filter((a) => ids.includes(a.id))
}

export const useAddAction = (action: Action) => {
  const arr = useContext(context)

  useEffect(() => {
    arr.push(action)
  }, [])

  return action.id
}

'use client'
// import Separator from './Separator'

// export default function Test({
//   code = 'Ops!',
//   message = 'Something went wrong?',
//   action,
// }: {
//   code?: string
//   message?: string
//   action?: React.ReactNode
// }) {
export default function Test() {
  return 'hello' as unknown as JSX.Element
}
// <div className="flex-1 text-lg grid place-content-center place-items-center">
//   {/* {code} */}
// </div>

//   <div className="flex gap-4 justify-center items-center">
//     <div>{code}</div>
//     {/* <Separator size={{ height: '48px' }} /> */}
//     <div>{message}</div>
//   </div>
//   {action}

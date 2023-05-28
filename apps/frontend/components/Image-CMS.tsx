/**
 * todo: I can use Image with no Error
 * 1. using it with out a loader give me vercel error `INVALID_IMAGE_OPTIMIZE_REQUEST`: the solution is to use loader
 * 2. using loader does not work with server component, because I can't pass function to client components.
 * https://github.com/vercel/next.js/discussions/20138#:~:text=while%20a%20loader%20implementation%20worked%20for%20me
 */
import url from 'url'
import Image_, { ImageLoader, ImageLoaderProps, ImageProps } from 'next/image'

// function myLoader({ src, width }: ImageLoaderProps) {
//   return `${process.env.API}${src}?w=${width}`
// }

export default function ImageCMS(props: ImageProps) {
  const pre = process.env.NODE_ENV === 'production' ? '' : process.env.API

  // todo: before using the following code checkout the console.log
  // the following code is to replace `pre`,
  // when props is relative you resolve it
  // against process.env.API but when it is
  // absolute you don't
  if (!process.env.API) throw new Error('process.env.API is not defined')
  const src = url.resolve(process.env.API || '', String(props.src))
  console.log('should be resolved against api', src)

  return <img {...props} src={`${pre}${props.src}`} />
}

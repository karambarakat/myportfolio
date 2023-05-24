// 'use server'
import Image_, { ImageLoader, ImageLoaderProps, ImageProps } from 'next/image'

// function myLoader({ src, width }: ImageLoaderProps) {
//   return `${process.env.API}${src}?w=${width}`
// }

export default function ImageCMS(props: ImageProps) {
  const pre = process.env.NODE_ENV === 'production' ? '' : process.env.API
  return <img {...props} src={`${pre}${props.src}`} />
}

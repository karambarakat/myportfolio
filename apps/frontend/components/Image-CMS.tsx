// 'use server'
import Image_, { ImageLoader, ImageLoaderProps, ImageProps } from 'next/image'

// function myLoader({ src, width }: ImageLoaderProps) {
//   return `${process.env.API}${src}?w=${width}`
// }

export default function ImageCMS(props: ImageProps) {
  return <img {...props} src={`${process.env.API}${props.src}`} />
}

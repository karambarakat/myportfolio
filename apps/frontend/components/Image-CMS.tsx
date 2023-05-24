import Image_, { ImageLoader, ImageLoaderProps, ImageProps } from 'next/image'

function myLoader({ src, width }: ImageLoaderProps) {
  return `${process.env.API}${src}?w=${width}`
}

export default function ImageCMS(props: ImageProps) {
  return <Image_ loader={myLoader} {...props} />
}

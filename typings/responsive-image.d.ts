type ResponsiveImageOutput = {
  src: string
  srcSet: string
  placeholder: string
  images: { path: string; width: number; height: number }[]
  width: number
  height: number
}

declare module '~/assets/images/*' {
  const content: ResponsiveImageOutput
  export default content
}

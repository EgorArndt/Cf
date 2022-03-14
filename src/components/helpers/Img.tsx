import { CSSProperties } from 'react'

type ImgProps = {
  height: string | number
  width: string | number
  src?: string
  alt?: string
  style?: CSSProperties
  [key: string]: unknown
}

const Img = ({ height, width, src, alt, style, ...props }: ImgProps) => (
  <div style={{ width, height, position: 'relative' }}>
    <img
      src={src}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
        ...style,
      }}
      alt={alt}
      {...props}
    />
  </div>
)

export default Img

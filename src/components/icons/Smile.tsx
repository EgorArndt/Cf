import * as React from 'react'
import { SVGProps } from 'react'

const SvgSmile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 43 43'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g fillRule='nonzero' fill='none'>
      <path
        d='M43 21.75C43 33.486 33.486 43 21.75 43S.5 33.486.5 21.75 10.014.5 21.75.5 43 10.014 43 21.75'
        fill='#FFCC4D'
      />
      <path
        d='M21.75 25.5c-4.529 0-7.534-.527-11.25-1.25-.849-.164-2.5 0-2.5 2.5C8 31.75 13.744 38 21.75 38c8.005 0 13.75-6.25 13.75-11.25 0-2.5-1.651-2.665-2.5-2.5-3.716.722-6.721 1.25-11.25 1.25M11.75 15.5s0-2.5 2.5-2.5 2.5 2.5 2.5 2.5V18s0 2.5-2.5 2.5-2.5-2.5-2.5-2.5v-2.5ZM26.75 15.5s0-2.5 2.5-2.5 2.5 2.5 2.5 2.5V18s0 2.5-2.5 2.5-2.5-2.5-2.5-2.5v-2.5Z'
        fill='#664500'
      />
      <path
        d='M10.5 26.75S14.25 28 21.75 28 33 26.75 33 26.75s-2.5 5-11.25 5-11.25-5-11.25-5'
        fill='#FFF'
      />
    </g>
  </svg>
)

export default SvgSmile

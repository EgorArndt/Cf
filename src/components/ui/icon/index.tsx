import React, { FC, ReactNode, RefObject } from 'react'
import styled from '@emotion/styled'

import { withStyles, WithStylesProps } from '@hocs'

type IconProps = {
  i?: ReactNode
  rounded?: boolean
  componentRef?: RefObject<HTMLSpanElement>
  size?: number
}

export type EnhancedIconProps = IconProps & WithStylesProps

const StyledIcon = styled.span<Partial<IconProps>>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ rounded }) => rounded && '100%'};

  *,
  * > * {
    width: ${({ size }) => (size ? size / 16 + 'em' : 'inherit')} !important;
    height: ${({ size }) => (size ? size / 16 + 'em' : 'inherit')} !important;
  }
`

const _Icon: FC<IconProps> = ({ i, componentRef, ...props }) => (
  <StyledIcon ref={componentRef} {...props}>
    {i}
  </StyledIcon>
)

const Icon = withStyles<EnhancedIconProps>(_Icon, null, true)

export default Icon

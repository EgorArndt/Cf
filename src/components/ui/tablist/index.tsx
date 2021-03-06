import { FC, ReactNode, RefObject } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { List, ListItem, ListProps } from '@ui'
import { Direction, BorderPlacement } from './constants'
import { AppTheme } from '@theme/models'

type TablistProps = {
  header?: ReactNode
  children: ReactNode
  items: ReactNode[]
  direction?: keyof typeof Direction
  ratio?: number
  minSize?: string | number
  as?: 'aside' | 'nav'
  border?: boolean
  componentRef?: RefObject<HTMLDivElement>
} & Omit<ListProps, 'border'>

const StyledTablist = styled.div<
  Partial<TablistProps> & { _direction: keyof typeof Direction }
>`
  display: flex;
  flex-direction: ${({ _direction }) => Direction[_direction]};
  height: 100%;
  width: 100%;

  .tablist {
    flex-basis: ${({ ratio = 20 }) => `${ratio}%`};
    z-index: ${({ theme }) => (theme as AppTheme).readonly.zIndex.popup};
    ${({ theme, _direction, border }) =>
      border &&
      css`border-${BorderPlacement[_direction]}: 1px solid ${
        (theme as AppTheme).mutatable.border
      }`};
  }

  .tabpanel {
    flex-basis: ${({ ratio = 20 }) => `${100 - ratio}%`};
  }
`

const Tablist: FC<TablistProps> = ({
  header,
  children,
  items,
  direction: _direction = 'left',
  ratio,
  minSize,
  as = 'aside',
  border,
  style,
  componentRef,
  ...props
}: TablistProps) => {
  const isHorizontal = _direction?.includes('top' || 'bottom')
  const _minSize = minSize
    ? isHorizontal
      ? { minHeight: minSize }
      : { minWidth: minSize }
    : {}

  return (
    <StyledTablist
      _direction={_direction}
      ratio={ratio}
      border={border}
      ref={componentRef}
    >
      {header}
      <List
        role='tablist'
        className='tablist'
        column={!isHorizontal}
        as={as}
        fullSize={isHorizontal}
        style={{ ..._minSize, style }}
        {...props}
      >
        {items.map((item, idx) => (
          <ListItem key={idx}>{item}</ListItem>
        ))}
      </List>
      {children}
    </StyledTablist>
  )
}

export default Tablist

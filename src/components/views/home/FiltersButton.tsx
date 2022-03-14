import { FC, ReactNode } from 'react'

import { Menu, MenuButton, Icon, GridGroup, Button } from '@ui'
import { utilityClasses } from '@theme/constants'

type FiltersButtonProps = {
  children: ReactNode[]
  onReset?: () => void
}

const FiltersButton: FC<FiltersButtonProps> = ({
  children,
  onReset,
}: FiltersButtonProps) => {
  return (
    <Menu
      transition
      arrow
      palette='tertiary'
      width='80%'
      menuButton={({ open }) => (
        <MenuButton
          palette='primary'
          className={open && utilityClasses.active}
          border
          before={
            <Icon color='info' i={<i className='fa-solid fa-filter' />} />
          }
        >
          Filters
        </MenuButton>
      )}
    >
      <GridGroup itemSize={{ min: 150 }} spacing={{ p: 1 }} gap={10} wrap>
        {children}
        {onReset && (
          <Button
            palette='info'
            style={{ textTransform: 'uppercase' }}
            onClick={onReset}
          >
            Reset
          </Button>
        )}
      </GridGroup>
    </Menu>
  )
}

export default FiltersButton

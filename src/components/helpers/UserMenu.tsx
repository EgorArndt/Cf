import { FC, ReactNode, Fragment } from 'react'

import { Menu, MenuItem, MenuButton, Divider } from '@ui'
import { Avatar, RotatingArrow } from 'components/helpers'

type UserMenu = {
  items?: ReactNode[]
}

const UserMenu: FC<UserMenu> = ({ items }: UserMenu) => {
  const stubbyMenuItems = [
    'Some menu item',
    'One more item',
    'Here could be your callback',
    'Just give me that job :)',
  ]

  return (
    <Menu
      offsetY={10}
      offsetX={-100}
      boxShadow
      transition
      palette='primary'
      spacing={{ pt: 0.5 }}
      fontSize='body1'
      menuButton={({ open }) => (
        <MenuButton
          palette='inherit'
          variant='ghost'
          iSize={10}
          after={<RotatingArrow isUp={open} />}
        >
          <Avatar />
        </MenuButton>
      )}
    >
      {items
        ? items
        : stubbyMenuItems.map((item, idx) => (
            <Fragment key={idx}>
              <MenuItem palette='inherit' spacing={{ p: 0.5 }}>
                {item}
              </MenuItem>
              {idx !== 1 && idx !== 5 && <Divider />}
            </Fragment>
          ))}
    </Menu>
  )
}

export default UserMenu

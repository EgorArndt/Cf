import { FC, ReactNode, Fragment } from 'react'

import { Menu, MenuItem, MenuButton, Divider } from '@ui'
import { ArrowLeft } from '@icons'
import { Avatar } from 'components/helpers'

type UserMenu = {
  trigger?: ReactNode
  items?: ReactNode[]
}

const UserMenu: FC<UserMenu> = ({ trigger, items }: UserMenu) => {
  const stubbyMenuItems = [
    'Some menu item',
    'One more item',
    'Here could be your callback',
    'Just give me that job :)',
  ]

  return (
    <Menu
      offsetY={50}
      direction='left'
      boxShadow
      transition
      palette='primary'
      border
      spacing={{ pt: 0.5 }}
      fontSize='body1'
      menuButton={({ open }) => (
        <MenuButton
          palette='inherit'
          variant='ghost'
          iSize={6}
          after={
            trigger ? (
              trigger
            ) : (
              <ArrowLeft
                style={{
                  transform: `rotate(${open ? 90 : -90}deg)`,
                  transition: 'ease 0.3s',
                }}
              />
            )
          }
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

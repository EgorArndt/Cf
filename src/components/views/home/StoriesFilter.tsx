import { FC, ChangeEvent } from 'react'
import { capitalize } from 'lodash-es'

import {
  Menu,
  MenuButton,
  MenuItem,
  Icon,
  Typography,
  Box,
  Label,
  Checkbox,
} from '@ui'
import { RotatingArrow } from 'components/helpers'
import type { MappedFilters, FilterValue } from 'hooks/useFilters'

type StoriesFilterProps = {
  id: string
  label: string
  options: string[]
  mappedFilters: MappedFilters
  currentValue: FilterValue
  onChange: (id: string, value: string) => void
}

const StoriesFilter: FC<StoriesFilterProps> = ({
  id,
  mappedFilters,
  currentValue,
  options,
  onChange,
  label,
}: StoriesFilterProps) => {
  const onFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const el = e.target,
      val = el.value
    onChange(el.getAttribute('data-filter') as string, val)
  }
  return (
    <Box>
      <Menu
        offsetY={10}
        menuButton={({ open }) => (
          <MenuButton align='space-between' spacing={{ p: 0 }} width='100%'>
            <Box
              column
              align='left'
              palette='primary'
              spacing={{ py: 0.5, px: 1 }}
              fullSize
              fontSize='body1'
            >
              <Typography bold>{capitalize(currentValue.unmapped)}</Typography>
              <Typography color='tertiary' uppercase>
                {label}
              </Typography>
            </Box>
            <Icon
              i={<RotatingArrow isUp={open} />}
              size={10}
              spacing={{ px: 1 }}
              height='100%'
              palette='primary'
            />
          </MenuButton>
        )}
      >
        <Box
          column
          style={{ minWidth: 250 }}
          boxShadow
          palette='primary'
          childrenSpacing={{ px: 2, py: 0.5 }}
        >
          <Typography bold uppercase style={{ userSelect: 'none' }}>
            {label}
          </Typography>
          {options.map((opt) => (
            <MenuItem
              key={opt}
              width='100%'
              palette='inherit'
              align='left'
              spacing={{ p: 0 }}
            >
              <Label
                id={id}
                gap='1rem'
                width='100%'
                height='100%'
                spacing={{ p: 1 }}
              >
                <Checkbox
                  checked={mappedFilters[id][opt] === currentValue.mapped}
                  value={opt}
                  onChange={(e) => onFilterChange(e)}
                  data-filter={id}
                />
                {capitalize(opt)}
              </Label>
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </Box>
  )
}

export default StoriesFilter

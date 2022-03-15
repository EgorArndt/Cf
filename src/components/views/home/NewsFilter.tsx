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
import { flipObject } from '@utils'

type NewsFilterProps = {
  id: string
  label: string
  options: string[]
  mappedFilterOptions: any
  currentValue: string
  onChange: (id: string, value: string) => void
}

const NewsFilter: FC<NewsFilterProps> = ({
  id,
  mappedFilterOptions,
  currentValue,
  options,
  onChange,
  label,
}: NewsFilterProps) => {
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
              <Typography bold>
                {capitalize(flipObject(mappedFilterOptions[id])[currentValue])}
              </Typography>
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
            <MenuItem key={opt} width='100%' palette='inherit' align='left'>
              <Label id={id} gap='1rem' width='100%' height='100%'>
                <Checkbox
                  checked={mappedFilterOptions[id][opt] === currentValue}
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

export default NewsFilter

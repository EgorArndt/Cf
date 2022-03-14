import { useState, FC, ChangeEvent } from 'react'
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
import { ArrowLeft } from '@icons'

type CheckboxFilterProps = {
  id: string
  label: string
  options: string[]
  defaultValue?: string
  onChange: (id: string, value: string) => void
}

const CheckboxFilter: FC<CheckboxFilterProps> = ({
  id,
  defaultValue,
  options,
  onChange,
  label,
}: CheckboxFilterProps) => {
  const [filterValue, setFilterValue] = useState(defaultValue)

  const onFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const el = e.target,
      val = el.value
    onChange(el.getAttribute('data-filter'), val)
    setFilterValue(val)

    document.querySelectorAll(`[data-filter=${id}]`).forEach((checkbox) => {
      if (el !== checkbox) checkbox.checked = false
    })
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
              <Typography bold>{capitalize(filterValue)}</Typography>
              <Typography color='tertiary' uppercase>
                {label}
              </Typography>
            </Box>
            <Icon
              i={
                <ArrowLeft
                  style={{
                    transform: `rotate(${open ? 90 : -90}deg)`,
                    transition: 'ease 0.3s',
                  }}
                />
              }
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
                  checked={filterValue === opt}
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

export default CheckboxFilter

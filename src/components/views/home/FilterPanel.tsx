import { FC } from 'react'

import { GridGroup, Button } from '@ui'
import { StoriesFilter } from '@views/home'
import { useBreakpoints } from '@hooks'
import type { Filter, MappedFilters, FilterValue } from 'hooks/useFilters'

type FilterPanelProps = {
  filters: Array<Filter>
  setFilters: (id: any, value: any) => void
  mappedFilters: MappedFilters
  resetFilters: () => void
  getFilterValue: (id: string) => FilterValue
}

const FilterPanel: FC<FilterPanelProps> = ({
  filters,
  setFilters,
  mappedFilters,
  resetFilters,
  getFilterValue,
}: FilterPanelProps) => {
  const { isXs } = useBreakpoints()

  return (
    <GridGroup itemSize={!isXs && { min: 150, max: 250 }} gap={10}>
      {filters.map(({ id, label, options }) => (
        <StoriesFilter
          key={id}
          id={id}
          currentValue={getFilterValue(id)}
          onChange={setFilters}
          mappedFilters={mappedFilters}
          label={label as string}
          options={options}
        />
      ))}
      <Button
        palette='info'
        style={{ textTransform: 'uppercase' }}
        onClick={resetFilters}
      >
        Reset
      </Button>
    </GridGroup>
  )
}

export default FilterPanel

import { useState, useEffect, useCallback, useMemo } from 'react'

import { flipObject } from '@utils'

type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never

export type Filter = {
  defaultValue: string | number
  id: string
  label?: string
  options: string[]
}

export type MappedFilters = {
  [key: Filter['id']]: { [key: ElementType<Filter['options']>]: unknown }
}

export type FilterValue = { mapped: string | number; unmapped: string }

const useFilters = (filters: Array<Filter>, mappedFilters: MappedFilters) => {
  const [_filters, _setFilters] = useState({})

  const setFilters = (
    id: Filter['id'],
    optionKey: ElementType<Filter['options']>
  ) => _setFilters({ ..._filters, [id]: mappedFilters[id][optionKey] })

  const resetFilters = useCallback(() => {
    let defaultFilters = {}
    filters.forEach(
      ({ id, defaultValue }) =>
        (defaultFilters = {
          ...defaultFilters,
          [id]: mappedFilters[id][defaultValue],
        })
    )
    _setFilters(defaultFilters)
  }, [])

  const getFilterValue = useCallback(
    (id: Filter['id']) => ({
      mapped: _filters[id],
      unmapped: flipObject(mappedFilters[id])[_filters[id]],
    }),
    [_filters]
  )

  useEffect(() => resetFilters(), [])
 
  return useMemo(
    () => ({
      filters: _filters,
      setFilters,
      resetFilters,
      getFilterValue,
    }),
    [_filters, _setFilters]
  )
}

export default useFilters

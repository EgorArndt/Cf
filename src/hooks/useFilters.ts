import { useState, useEffect, useCallback } from 'react'
import { get } from 'lodash-es'

import { flipObject } from '@utils'

type OneOf<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer OneOf
>
  ? OneOf
  : never

export type Filter = {
  defaultValue: string | number
  id: string
  label?: string
  options: string[]
}

export type MappedFilters = {
  [key: Filter['id']]: { [key: OneOf<Filter['options']>]: FilterValue['mapped'] }
}

export type FilterValue = { mapped: string | number; unmapped: string }

const useFilters = (filters: Array<Filter>, mappedFilters: MappedFilters) => {
  const [_filters, _setFilters] = useState({} as {[key: Filter['id']]: FilterValue['mapped']})

  const setFilters = (
    id: Filter['id'],
    optionKey: OneOf<Filter['options']>
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
    (id: Filter['id']): FilterValue => ({
      mapped: _filters[id],
      unmapped: get(flipObject(mappedFilters[id]), `${_filters[id]}`)
    }),
    [_filters]
  )
  
  useEffect(() => resetFilters(), [])

  return {
    filters: _filters,
    setFilters,
    resetFilters,
    getFilterValue,
  }
}

export default useFilters

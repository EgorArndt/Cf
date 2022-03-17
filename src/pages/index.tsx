import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { omit } from 'lodash-es'

import type { Page } from 'next/app'
import { FilterPanel, StoriesWrapper } from '@views/home'
import { FormattedStory } from '@views/home/models'
import { formatData } from '@views/home/utils/formatData'
import { Typography, Box, Button, Icon } from '@ui'
import { stories as url } from 'constants/api'
import { filters as _filters, mappedFilterOptions } from 'constants/filters'
import { Main } from '@layouts/base'
import { useApi, useBreakpoints, useToggle, useFilters } from '@hooks'
import { utilityClasses } from '@theme/constants'

const Home: Page = () => {
  const [stories, setStories] = useState([] as Array<FormattedStory>)
  const { filters, setFilters, resetFilters, getFilterValue } = useFilters(
    _filters,
    mappedFilterOptions
  )
  const [isFilterPanelOpen, toggleIsFilterPanelOpen] = useToggle(false)
  const { loading, data, error } = useApi({
    url,
    params: omit(filters, 'autorefresh'),
    config: {
      refreshInterval: (filters as {autorefresh: number}).autorefresh,
    },
  })
  const { reload } = useRouter()
  const { isXs, isS, isM } = useBreakpoints()

  useEffect(() => {
    if (data) setStories(formatData(data))
  }, [filters, data])

  return (
    <Main
      palette='secondary'
      column
      gap='1rem'
      spacing={{ pt: 2 }}
      childrenSpacing={!isXs && { mx: 3 }}
      width={isM ? '90%' : '100%'}
    >
      <Box align={isS && 'space-between'} column={!isS} gap='1rem'>
        <Typography title color='info'>
          Watchlist Name
        </Typography>
        <Box gap='1rem'>
          {[
            {
              txt: isM ? 'Refresh' : '',
              i: 'fa-solid fa-rotate-right',
              onClick: reload,
            },
            {
              txt: isXs ? '' : 'Filters',
              i: 'fa-solid fa-filter',
              onClick: toggleIsFilterPanelOpen,
              className: isFilterPanelOpen && utilityClasses.active,
            },
          ].map(({ txt, i, onClick, className }) => (
            <Button
              key={txt}
              onClick={onClick}
              size='m'
              palette='primary'
              border
              align='left'
              className={className}
              gap={10}
            >
              <Icon color='info' i={<i className={i} />} />
              {txt}
            </Button>
          ))}
        </Box>
      </Box>
      {isFilterPanelOpen && (
        <FilterPanel
          filters={_filters}
          setFilters={setFilters}
          mappedFilters={mappedFilterOptions}
          resetFilters={resetFilters}
          getFilterValue={getFilterValue}
        />
      )}
      <StoriesWrapper stories={stories} loading={loading} error={error} />
    </Main>
  )
}

export default Home

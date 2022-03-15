import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { omit } from 'lodash-es'

import type { Page } from 'next/app'
import { NewsFilter, Story, StorySkeleton } from '@views/home'
import { FormattedStory, RawStory } from '@views/home/models'
import { GridGroup, Typography, Box, Button, Icon } from '@ui'
import { stories as url } from 'constants/api'
import { filters, mappedFilterOptions } from 'constants/filters'
import { Main } from '@layouts/base'
import { useApi, useBreakpoints } from '@hooks'
import { utilityClasses } from '@theme/constants'
import Skeleton from 'components/skeleton'

const Home: Page = () => {
  const [stories, setStories] = useState([] as [] | Array<FormattedStory>)
  const [userFilters, setUserFilters] = useState({})
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false)
  const { loading, data, error } = useApi({
    url,
    params: omit(userFilters, 'autorefresh'),
    config: {
      refreshInterval: userFilters?.autorefresh,
    },
  })
  const { reload } = useRouter()
  const { isXs, isS, isM } = useBreakpoints()

  const onFilterChange = (id: string, value: string) =>
    setUserFilters({ ...userFilters, [id]: mappedFilterOptions[id][value] })

  const formatData = (data: {
    stories: Array<RawStory>
  }): Array<FormattedStory> =>
    data.stories.map((story: RawStory) => ({
      imgUrl: story.imageUrls ? story.imageUrls[0] : '',
      title: story.title,
      domainName: story.domain_name,
      publishTime: story.publishTime,
      score: story.score,
      logo: story.domain_cached_logo_url,
      url: story.url,
      domainHost: story.domain_host,
      description: story.description,
    }))

  const resetFilters = () => {
    let defaultFilters = {}
    filters.forEach(
      ({ id, defaultValue }) =>
        (defaultFilters = {
          ...defaultFilters,
          [id]: mappedFilterOptions[id][defaultValue],
        })
    )
    setUserFilters(defaultFilters)
  }

  useEffect(() => {
    if (data) setStories(formatData(data))
  }, [userFilters, data])

  useEffect(() => resetFilters(), [])

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
              onClick: () => setIsFilterPanelOpen(!isFilterPanelOpen),
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
        <GridGroup itemSize={!isXs && { min: 150, max: 250 }} gap={10}>
          {filters.map(({ id, label, options }) => (
            <NewsFilter
              onChange={onFilterChange}
              key={id}
              mappedFilterOptions={mappedFilterOptions}
              currentValue={userFilters[id]}
              id={id}
              label={label}
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
      )}
      <Box column gap='1rem'>
        {loading ? <StorySkeleton q={10} /> : 
          stories.map(({ title, ...props }) => (
            <Story key={title} title={title} {...props} />
          ))
        }
      </Box>
    </Main>
  )
}

export default Home

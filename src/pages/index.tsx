import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { omit } from 'lodash-es'

import type { Page } from 'next/app'
import { NewsFilter, NewsWrapper, FiltersButton } from '@views/home'
import { FormattedStory, RawStory } from '@views/home/models'
import { Box, Typography, Button, Icon } from '@ui'
import { stories as url } from 'constants/api'
import { filters, mappedFilterOptions } from 'constants/filters'
import { Main } from '@layouts/base'
import { useApi } from '@hooks'

const Home: Page = () => {
  const [stories, setStories] = useState([] as [] | Array<FormattedStory>)
  const [userFilters, setUserFilters] = useState({})
  const { loading, data, error } = useApi({
    url,
    params: omit(userFilters, 'autorefresh'),
    refreshInterval: userFilters?.autorefresh,
  })
  const { reload } = useRouter()

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
    <Main palette='secondary' column gap='1rem' spacing={{ pt: 2 }}>
      <Typography title color='info'>
        Watchlist Name
      </Typography>
      <Box gap='1rem'>
        <Button
          onClick={reload}
          size='m'
          palette='primary'
          border
          before={
            <Icon color='info' i={<i className='fa-solid fa-rotate-right' />} />
          }
        >
          Refresh
        </Button>
        <FiltersButton onReset={resetFilters}>
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
        </FiltersButton>
      </Box>
      <NewsWrapper stories={stories} loading={loading} error={error} />
    </Main>
  )
}

export default Home

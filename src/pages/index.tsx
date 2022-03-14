import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { omit } from 'lodash-es'

import type { Page } from 'next/app'
import { CheckboxFilter, NewsWrapper } from '@views/home'
import { FormattedStory, RawStory } from '@views/home/models'
import { Box, Typography, Button, GridGroup, Menu, MenuButton, Icon } from '@ui'
import { utilityClasses } from '@theme/constants'
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

  const onFilterChange = (id: string, value: string) => {
    setUserFilters({ ...userFilters, [id]: mappedFilterOptions[id][value] })
  }

  const formatData = (data: {stories: Array<RawStory>}): Array<FormattedStory> => 
    (data.stories.map((story: RawStory) => ({
      imgUrl: story.imageUrls ? story.imageUrls[0] : '',
      title: story.title,
      domainName: story.domain_name,
      publishTime: story.publishTime,
      score: story.score,
      logo: story.domain_cached_logo_url,
      url: story.url,
      domainHost: story.domain_host,
      description: story.description,
    })))

  useEffect(() => {
    if (data) setStories(formatData(data))
  }, [userFilters, data])

  useEffect(() => {
    let defaultFilters = {}
    filters.forEach(
      ({ id, defaultValue }) =>
        (defaultFilters = {
          ...defaultFilters,
          [id]: mappedFilterOptions[id][defaultValue],
        })
    )
    setUserFilters(defaultFilters)
  }, [])

  return (
    <Main
      palette='secondary'
      spacing={{ pl: 3, pt: 2, pr: 2 }}
      column
      gap='1rem'
    >
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
        <Menu
          transition
          arrow
          palette='tertiary'
          width='80%'
          menuButton={({ open }) => (
            <MenuButton
              palette='primary'
              className={open && utilityClasses.active}
              border
              before={
                <Icon color='info' i={<i className='fa-solid fa-filter' />} />
              }
            >
              Filters
            </MenuButton>
          )}
        >
          <GridGroup itemSize={{ min: 150 }} spacing={{ p: 1 }} gap={10} wrap>
            {filters.map(({ id, label, options, defaultValue }) => (
              <CheckboxFilter
                onChange={onFilterChange}
                key={id}
                defaultValue={defaultValue}
                id={id}
                label={label}
                options={options}
              />
            ))}
            <Button palette='info' style={{ textTransform: 'uppercase' }}>
              Reset
            </Button>
          </GridGroup>
        </Menu>
      </Box>
      <NewsWrapper stories={stories} loading={loading} error={error} />
    </Main>
  )
}

export default Home

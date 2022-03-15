import { FC } from 'react'

import { Box, Typography } from '@ui'
import { Story, StorySkeleton } from '@views/home'
import { FormattedStory } from './models'

type StoriesWrapperProps = {
  stories: FormattedStory[]
  loading: boolean
  error: Record<string, unknown>
}

const StoriesWrapper: FC<StoriesWrapperProps> = ({
  stories,
  loading,
  error,
}: StoriesWrapperProps) => (
  <Box column gap='1rem'>
    {loading ? (
      <StorySkeleton q={10} />
    ) : error ? (
      <Typography>
        Sorry, your search yielded no results. Try specifying different filters
        for your search.
      </Typography>
    ) : (
      stories.map(({ title, ...props }) => (
        <Story key={title} title={title} {...props} />
      ))
    )}
  </Box>
)

export default StoriesWrapper

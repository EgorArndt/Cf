import { FC } from 'react'

import { Box, BoxProps } from '@ui'
import { Story } from '@views/home'
import Skeleton from 'components/skeleton'
import { FormattedStory } from './models'

type StoriesWrapperProps = {
  stories: FormattedStory[]
  loading: boolean
  error: Record<string, unknown>
} & BoxProps

const StoriesWrapper: FC<StoriesWrapperProps> = ({
  stories,
  loading,
  error,
  ...boxProps
}: StoriesWrapperProps) => (
  <Box column gap='1rem' {...boxProps}>
    {loading
      ? [1, 2, 3, 4, 5, 6].map((i) => <Skeleton key={i} height={180} inline />)
      : Boolean(stories.length) &&
        stories.map(({ title, ...props }) => (
          <Story key={title} title={title} {...props} />
        ))}
  </Box>
)

export default StoriesWrapper

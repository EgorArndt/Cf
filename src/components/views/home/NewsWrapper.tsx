import { FC } from 'react'

import { Box, BoxProps } from '@ui'
import { Story } from '@views/home'
import { FormattedStory } from './models'

type NewsWrapperProps = {
    stories: FormattedStory[]
    loading: boolean
    error: Record<string, unknown>
} & BoxProps

const NewsWrapper: FC<NewsWrapperProps> = ({ stories, loading, error, ...boxProps }: NewsWrapperProps) => 
    <Box column gap='1rem' {...boxProps}>
        {Boolean(stories.length) && 
            stories.map(({title, ...props}) => 
                <Story 
                    key={title} 
                    title={title} 
                    {...props} 
                />
            )
        }
    </Box>

export default NewsWrapper
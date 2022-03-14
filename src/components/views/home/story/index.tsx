import { FC, useState, useRef } from 'react'

import { Box, Typography, Button, Link } from '@ui'
import { Img } from 'components/helpers'
import { useClick, useBreakpoints } from '@hooks'
import Toggler from './Toggler'
import { FormattedStory } from '../models'

const Story: FC<FormattedStory> = ({
  imgUrl,
  title,
  domainName,
  publishTime,
  score,
  domainHost,
  logo,
  url,
  description,
}: FormattedStory) => {
  const [isOpen, setIsOpen] = useState(false)
  const storyRef = useRef(null)
  const { isXs } = useBreakpoints()
  useClick('outside', storyRef.current, () => setIsOpen(false))

  return (
    <Box column border palette='primary' componentRef={storyRef}>
      <Box>
        <Img
          height='100%'
          width={isXs ? 60 : 100}
          src={imgUrl}
          alt={domainName}
          style={{ marginRight: 'auto', maxHeight: 80 }}
        />
        <Box height='100%' width='100%' column={isXs}>
          <Box
            align={['space-between', 'flex-start']}
            width='100%'
            spacing={{ p: 1 }}
          >
            <Box column align='left' gap='1rem'>
              <Link
                to={url}
                color='primary'
                passHref
                style={{ fontWeight: 'bold' }}
              >
                {title}
              </Link>
              {isOpen && <Box width='80%'>{description}</Box>}
              <Box align={isXs ?  'left' : [null, 'center']} gap={!isXs&&'2rem'} color='tertiary' column={isXs}>
                <Link
                  to={domainHost}
                  palette='inherit'
                  variant='ghost'
                  passHref
                  gap={10}
                >
                  <Img height={25} width={25} src={logo} alt={domainName} />
                  {domainName}
                </Link>
                <Typography fontSize='caption'>1 d</Typography>
              </Box>
            </Box>
            {!isXs && <Toggler score={score} cb={setIsOpen} isOpen={isOpen} />}
          </Box>
          {isXs && (
        <Toggler
          score={score}
          cb={setIsOpen}
          isOpen={isOpen}
          align='space-between'
        />
      )}
        </Box>

      </Box>
      {isOpen && (
        <Box width='100%' borderTop gap={isXs ? 5 : '1rem'} align={isXs? 'center' :'right'}>
          {[
            { txt: 'Like', i: 'thumbs-up' },
            { txt: 'Dislike', i: 'thumbs-down' },
            { txt: 'Bookmark', i: 'bookmark' },
          ].map(({ txt, i }) => (
            <Button
              key={txt}
              colorOnHover='info'
              before={<i className={`fa-solid fa-${i}`} />}
              spacing={{ p: 1 }}
            >
              {txt}
            </Button>
          ))}
        </Box>
      )}
    </Box>
  )
}

export default Story

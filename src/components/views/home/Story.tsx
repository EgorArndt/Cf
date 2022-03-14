import { FC, useState, useRef } from 'react'

import { Box, Typography, Button, Link } from '@ui'
import { Img } from 'components/helpers'
import { useClick } from '@hooks'
import { ArrowLeft } from '@icons'
import { FormattedStory } from './models'

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
  useClick('outside', storyRef.current, () => setIsOpen(false))

  return (
    <Box column border palette='primary' componentRef={storyRef}>
      <Box>
        <Img
          height='100%'
          width={100}
          src={imgUrl}
          alt={domainName}
          style={{ marginRight: 'auto', maxHeight: 80 }}
        />
        <Box
          align={['space-between', 'flex-start']}
          height='100%'
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
            <Box align={[null, 'center']} gap='2rem' color='tertiary'>
              <Link
                to={domainHost}
                palette='inherit'
                variant='ghost'
                passHref
                fontSize='body1'
                gap={10}
              >
                <Img height={25} width={25} src={logo} alt={domainName} />
                {domainName}
              </Link>
              <Typography fontSize='caption'>{publishTime}</Typography>
            </Box>
          </Box>
          <Box center gap='0.5rem'>
            <Typography
              color={score < 50 ? 'warning' : score < 25 ? 'error' : 'success'}
              spacing={{ p: 0.5 }}
              style={{ border: '1px solid', borderRadius: 4 }}
              noWrap
            >
              {score}%
            </Typography>
            <Button
              width={50}
              onClick={() => setIsOpen(!isOpen)}
              iSize={10}
              size='m'
              before={
                <ArrowLeft
                  style={{
                    transform: `rotate(${isOpen ? 90 : -90}deg)`,
                    transition: 'ease 0.3s',
                  }}
                />
              }
            />
          </Box>
        </Box>
      </Box>
      {isOpen && (
        <Box width='100%' borderTop gap='1rem' align='right'>
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

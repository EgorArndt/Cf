import { Box, Typography, Button } from '@ui'
import { RotatingArrow } from 'components/helpers'
import { useBreakpoints } from '@hooks'

const Toggler = ({ cb, score, isDescOpen, ...props }) => {
  const { isXs } = useBreakpoints()
  return (
    <Box center={!isXs} gap='0.5rem' {...props}>
      <Typography
        color={score < 50 ? 'warning' : score < 25 ? 'error' : 'success'}
        spacing={{ p: 0.5 }}
        style={isXs ? {} : { border: '1px solid', borderRadius: 4 }}
        noWrap
      >
        {score}%
      </Typography>
      <Button
        width={50}
        onClick={cb}
        iSize={10}
        size='m'
        before={<RotatingArrow isUp={isDescOpen} />}
      />
    </Box>
  )
}

export default Toggler

import { Box, Typography, Button } from '@ui'
import { ArrowLeft } from '@icons'
import { useBreakpoints } from '@hooks'

const Toggler = ({ cb, score, isOpen, ...props }) => {
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
        onClick={() => cb(!isOpen)}
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
  )
}

export default Toggler

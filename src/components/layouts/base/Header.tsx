import { Box } from '@ui'
import { Logo, UserMenu } from 'components/helpers'
import { useBreakpoints } from '@hooks'
import { Hamburger } from '@layouts/helpers'

const Header = () => {
  const { isM } = useBreakpoints()

  return (
    <Box
      as='header'
      palette='primary'
      height={50}
      align={['space-between', 'center']}
      spacing={{ px: 1.5 }}
      width='100%'
      borderBottom
    >
      <Box center gap={10}>
        {!isM && <Hamburger palette='info' />}
        <Logo />
      </Box>
      <Box center>
        <UserMenu />
      </Box>
    </Box>
  )
}

export default Header

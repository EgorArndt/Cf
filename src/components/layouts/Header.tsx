import { Box } from '@ui'
import { Logo, UserMenu } from 'components/helpers'

const Header = () => (
  <Box
    as='header'
    palette='primary'
    height={50}
    align={['space-between', 'center']}
    spacing={{ px: 1.5 }}
    width='100%'
    borderBottom
  >
    <Logo />
    <Box center>
      <UserMenu />
    </Box>
  </Box>
)

export default Header

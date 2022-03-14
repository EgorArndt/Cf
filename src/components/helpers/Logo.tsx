import { Link, LinkProps } from '@ui'
import { Logo as LogoIcon } from '@icons'

const Logo = ({ ...props }: Omit<LinkProps, 'to'>) => {
  return <Link role='logo' to='/' before={<LogoIcon />} iSize={75} {...props} />
}

export default Logo

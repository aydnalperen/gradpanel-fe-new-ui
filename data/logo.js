import Image from 'next/image'
import blackLogo from '../public/static/images/logo-black.png'
import whiteLogo from '../public/static/images/logo-white.png'

export default function Logo() {
  return (
    <picture>
      <source srcSet={whiteLogo.src} media="(prefers-color-scheme: dark)" />
      <Image src={blackLogo} alt="logo" />
    </picture>
  )
}

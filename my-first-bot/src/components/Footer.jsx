import React from 'react'

import { HeaderStyle } from './Header'

const FooterStyle = HeaderStyle.extend`
  position: fixed;
  bottom: 0;
  z-index: 52;
  @media (max-width: 1315px) {
    & {
      position: static;
    }
  }
`

export const Footer = () => {
  return(
      <FooterStyle>© 2017 made by Adamska</FooterStyle>
  )
}

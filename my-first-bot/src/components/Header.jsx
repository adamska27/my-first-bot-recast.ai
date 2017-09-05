import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
color: white;
font-weight: bold;
text-transform: uppercase;
`

const Header = () => {
  return(
    <div style={{ width: '100%', backgroundColor: '#311B92', textAlign: 'center', padding: '15px 0'}}>
      <Title>Welcome, Human</Title>
    </div>
  )
}

export default Header

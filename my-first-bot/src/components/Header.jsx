import React from 'react'
import styled from 'styled-components'

export const Title = styled.h1`
  font-weight: bold;
  text-transform: uppercase;
`

export const HeaderStyle = styled.div`
  width: 100%;
  color: white;
  background-color: #311B92;
  text-align: center;
  padding: 10px 0;
`

export const Header = () => {
  return(
    <HeaderStyle>
      <Title>Welcome, Human</Title>
    </HeaderStyle>
  )
}

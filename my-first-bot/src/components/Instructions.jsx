import React from 'react'
import styled from 'styled-components'

const Pstyled = styled.p`
  max-width: 600px;
  margin: 5px auto;
  text-align: justify;
  line-height: 1.5;
  font-size: 1.25em;
`

const Instructions = () => {
  return(
    <div style={{padding: '20px'}}>
      <h2 style={{margin: '20px auto 0 auto', textAlign: 'center'}}>A little description</h2>
      <Pstyled>It's Trinity, my first bot. As you have probably noticed yet, I built this bot with recast.ai api and their tool the bot builder. A very graphic interface which help to create and manage your bot. For the client side I use React with create react app and I add styled-component, a very cool library which allow you to add style via a component. The backend is manage with nodeJs and his famous framework express. It's a very simple bot, actually it can understand only few words like 'hello', 'bye' and 'thanks' but I'll continue to work on it. Stay tune.</Pstyled>
  </div>
  )
}

export default Instructions

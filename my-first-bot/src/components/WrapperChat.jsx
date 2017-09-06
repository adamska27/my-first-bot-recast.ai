import React from 'react'
import styled from 'styled-components'

import Message from './Message'
import UserInput from './UserInput'


const Wrapper = styled.section`
  position: relative;
  height: 600px;
  width: 400px;
  margin: -45px auto 0 auto;
  padding: 15px;
  box-shadow: 0px 0px 3px 1px black;
  border-radius: 5% 0 0 5%;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #FFFFFF;
  color: black;
  &::-webkit-scrollbar
  {
  	width: 5;
  	background-color: #80d8ff;
  };
  &::-webkit-scrollbar-thumb
  {
  	background-color: #01579b;
  };
  @media (max-width:455px) {
    & {
      width: 100%;
    }
  }
`

const ContainerWrapper = styled.div`
  margin-bottom: 20px;
  @media (max-width:455px) {
    & {
      width: 100%;
    }
  }
`

const WrapperChat = (props) => {
  return(
    <ContainerWrapper>
      <form style={{position: 'relative', top: '585px', textAlign: 'center', zIndex: '50'}} onSubmit={props.onSubmit} >
        <UserInput value={props.value} onChange={props.onChange} />
      </form>
    <Wrapper>
        <ul style={{marginBottom: '50px'}} >
          {
            props.conversation ? (
              props.conversation.map( (message, i) => {
                return message.name === 'user' ?
                (<Message key={i} content={message.value} user name={message.name} />)
                :
                (<Message key={i} content={message.value} name={message.name} />)
              })
            )
            :
              console.log('No messages')
            }
        </ul>
      </Wrapper>
    </ContainerWrapper>
  )
}

export default WrapperChat

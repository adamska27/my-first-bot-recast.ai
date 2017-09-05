import React from 'react'
import styled from 'styled-components'

const Name = styled.p`
  diplay: inline-block;
  padding: 0px 20px;
  margin: 0px;
  font-size: 10px;
`

const Bubble = styled.p`
  display: inline-block;
  max-width: 70%;
  padding: 10px 10px;
  box-shadow: 0px 0px 1px 0px black;
  border-radius: 20px;
  background-color: ${props => props.user ? '#0091ea' : '#ff6d00'};
  margin: 10px;
  color: ${props => props.user ? 'white' : 'black'};
`
const ListBubble = styled.li`
  list-style-type: none;
  text-align: ${props => props.user ? 'right' : 'left'};
`

const Message = (props) =>
    {
      return props.user ?
      (
        <ListBubble key={props.key} user>
          <Name>{props.name}</Name>
          <Bubble user>{props.content}</Bubble>
        </ListBubble>
      )
      :
      (
        <ListBubble key={props.key}>
          <Name>{props.name}</Name>
          <Bubble>{props.content}</Bubble>
        </ListBubble>
      )
    }


export default Message

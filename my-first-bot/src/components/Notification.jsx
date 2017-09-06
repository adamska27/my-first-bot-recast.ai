import React from 'react'
import styled from 'styled-components'

const NotificationStyle = styled.p`
  visibility: hidden;
  width: 400px;
  margin: auto;
  text-align: center;
  font-size: 20px;
  padding: 5px;
  background-color: #80d8ff;
  color: white;
  z-index: 55;
`

const Notification = (props) => {
  return <NotificationStyle id={props.id}>{props.message}</NotificationStyle>
}

export default Notification

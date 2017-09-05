import React from 'react'
import styled from 'styled-components'


export const UserInputStyle = styled.input`
  width: 380px;
  height: 45px;
  -webkit-appearance: none;
  border: none;
  outline: none;
  border-top: black solid 3px;
  font-size: 18px;
  &:focus {
    border-top: 3px solid #448aff;
  }
`

const UserInput = (props) => {
  return(
    <UserInputStyle type="text" name="userMessage" placeholder="Write something..." value={props.value} onChange={props.onChange}/>
  )
}

export default UserInput

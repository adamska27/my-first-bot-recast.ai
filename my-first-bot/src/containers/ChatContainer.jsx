import React, { Component } from 'react'
import '../index.css'

import WrapperChat from '../components/WrapperChat'
import Notification from '../components/Notification'

class ChatContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      userMessage: {},
      botReply: {},
      conversation: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: {name: 'user', value: [e.target.value]}
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    // check if the input is not empty
    if (this.state.userMessage.value) {
      this.setState({conversation: [...this.state.conversation, this.state.userMessage]})
      fetch('http://localhost:3001/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept' : 'application/json',
        },
        body: JSON.stringify({
          userMessage: this.state.userMessage.value
        })
      })
      .then( (res) => {
        console.log(`The Promise is on the way`)
        console.log('result1 :', res)
        return res.text()
      })
      .then( (result) => {
        console.log('result 2: ', result)
        this.setState({
          botReply: {name: 'bot', value: result},
          userMessage: {name: 'user', value: ''}
        })
        this.setState({conversation: [...this.state.conversation, this.state.botReply]})
      })
      .catch( (err) => console.log('erreur ' + err))
    }
    // if input empty show a error message
    else {
      console.log('No userMessage')
      document.getElementById('err').classList.add('visible')
      window.setTimeout( () => {
        document.getElementById('err').classList.remove('visible')
      }, 3000)
    }
  }

  render() {
    return (
      <div className="ChatContainer">
        <h2>Second Step: Talk with the bot and try to say hello...</h2>
        <WrapperChat conversation={this.state.conversation} value={this.state.userMessage.value} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
        <Notification id='err' message='Erreur: You must write something...'/>
      </div>
    )
  }
}

export default ChatContainer

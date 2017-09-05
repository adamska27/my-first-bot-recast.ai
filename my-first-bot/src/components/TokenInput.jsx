import React, { Component } from 'react'
import Instructions from './Instructions'
import Notification from './Notification'

class TokenInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    if (this.state.token) {
      e.preventDefault()
      fetch('http://localhost:3001/createToken/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept' : 'application/json',
        },
        body: JSON.stringify({
          token: this.state.token
        })
      })
      .then( res => {
        console.log('Token save')
        document.getElementById('TokenFeedback').classList.add('visible')
        window.setTimeout( () => {
          document.getElementById('TokenFeedback').classList.remove('visible')
        }, 3000)
      })
      .catch( err => console.log('erreur: ' + err))
    } else {
      console.log('miss Token')
      document.getElementById('TokenMissing').classList.add('visible')
      window.setTimeout( () => {
        document.getElementById('TokenMissing').classList.remove('visible')
      }, 3000)
    }
  }

  render() {
    return(
      <div>
        <h2>First Step:  Enter your token from reacst.ai</h2>
        <form onSubmit={this.handleSubmit} style={{textAlign: 'center'}}>
          <input type="text" name="token" onChange={this.handleChange} />
          <button>Confirm</button>
        </form>
        <Notification id='TokenFeedback' message='Your token is now save' />
        <Notification id='TokenMissing' message='You need a token from recast.ai' />
        <Instructions />
      </div>
    )
  }
}

export default TokenInput

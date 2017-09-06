import React, { Component } from 'react'
import {Header} from './components/Header'
import ChatContainer from './containers/ChatContainer'
import TokenInput from './components/TokenInput'
import {Footer} from './components/Footer'


class App extends Component {
  render() {
    return(
    <div className='App'>
      <Header />
      <div className='main-content'>
        <TokenInput />
        <ChatContainer />
      </div>
      <Footer />
    </div>
    )
  }
}

export default App

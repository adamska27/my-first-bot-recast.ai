import React, { Component } from 'react'
import {Header} from './components/Header'
import ChatContainer from './containers/ChatContainer'
import {Footer} from './components/Footer'


class App extends Component {
  render() {
    return(
    <div className='App'>
      <Header />
      <div className='main-content'>
        <ChatContainer />
      </div>
      <Footer />
    </div>
    )
  }
}

export default App

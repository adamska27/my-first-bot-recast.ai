import React, { Component } from 'react'
import Header from './components/Header'
import ChatContainer from './containers/ChatContainer'
// import Instructions from './components/Instructions'
import TokenInput from './components/TokenInput'


class App extends Component {
  render() {
    return(
    <div className='App'>
      <Header />
      <div className='main-content'>
        <TokenInput />
        <ChatContainer />
        {/* <Instructions /> */}
      </div>
    </div>
    )
  }
}

export default App

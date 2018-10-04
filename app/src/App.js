import React, { Component } from 'react';
import Chat from './components/Chat';
import socket from './socket';
import { onFetchMessages } from './actions/MESSAGES';

class App extends Component {
  state = {
    messages: [],
    text: ''
  }

  componentDidMount() {
    
    socket.on('MESSAGE', (message) => {
      this.setState({
        messages: this.state.messages.concat([message]),
        text: ''
      });
    });

    this.onFetchMessages();
  }

  onFetchMessages = async () => {
    const response = await onFetchMessages();

    console.log('response ', response);

    if (response.success) {
      this.setState({
        messages: response.messages
      });
    }
  }

  onChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  onKeyPress = (e) => {
    const key = e.keyCode || e.which;

    if (key === 13) {
      this.onSendMessage();
    }
  }

  onSendMessage = () => {
    if (this.state.text) {
      socket.emit('MESSAGE', {
        text: this.state.text
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Chat 
          {...this.state}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
          onSendMessage={this.onSendMessage}
        />
      </div>
    );
  }
}

export default App;
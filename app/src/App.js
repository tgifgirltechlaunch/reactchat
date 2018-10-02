import React, { Component } from 'react';
import Chat from './components/Chat';
import socket from './socket';

class App extends Component {
    state ={
        messages: [],
        text: ''
    }

    componentDidMount(){
        socket.on('MESSAGES', (messages) => {
            this.setState({
                messages: messages
            });
        });

        socket.on('MESSAGE', (message) => {
            this.setState({
                messages: this.state.messages.concat([message]), 
                text:''
            });
            
        });
    }

    onChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onSendMessage = () => {
        socket.emit('MESSAGE', {
            text: this.state.text
        });
    }

  render() {
    return (
      <div className="App">
        <Chat 
        {...this.state}
        onChange={this.onChange}
        onSendMessage={this.onSendMessage}
        />
      </div>
        
    );
  }
}

export default App;

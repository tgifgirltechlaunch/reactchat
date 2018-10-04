import React from 'react';
import OutlineInput from './OutlineInput';
import CircleButton from './CircleButton';

const Chat = (props) => {
  const { messages, text, onChange, onSendMessage, onKeyPress } = props;

  return (
    <div className="chat-container">
      <div className="chat-header">Welcome</div>
      
      <div className="chat-messages cool-scrollbar">
        {
          messages.map((message) => (
            <div className="bubble-left" key={message._id}>{message.text}</div>
          ))
        }
      </div>
      <div className="chat-input-btn-container">
        <OutlineInput 
          text={text}
          onChange={onChange} 
          onKeyPress={onKeyPress}
        />

        <CircleButton 
          onSendMessage={onSendMessage}
        />
      </div>
      
    </div>
  )
}

export default Chat;
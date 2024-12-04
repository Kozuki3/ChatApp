import React from 'react'
import './chat.css'
import LeftSidebar from '../../componets/leftsidebar/leftsidebar'
import ChatBox from '../../componets/chatbox/chatbox'
import RightSidebar from '../../componets/rightsidebar/rightsidebar'


const Chat = () => {
  return (
    <div className='chat'>
      <div className='chat-container'>
        <LeftSidebar/>
        <ChatBox/>
        <RightSidebar/>
      </div>
      
    </div>
  )
}

export default Chat

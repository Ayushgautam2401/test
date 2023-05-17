import React from 'react'
import { Button } from 'semantic-ui-react'
import './style.scss'
import SideBar from './SideBar'
import ChatPart from './ChatPart'

function Chat() {
    return (
        <div className='chat'>
            <SideBar/>
            <ChatPart/>
        </div>
    )
}

export default Chat
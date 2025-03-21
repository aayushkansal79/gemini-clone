import React from 'react'
import './sidebar.css'
import {assets} from '../../assets/assets'

const sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <img src={assets.menu_icon} alt="" />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="" />
                <p>New Chat</p>
            </div>
            <div className="recent">
                <p className="recent-title">Recent</p>
                <div className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                    <p>What is computer ...</p>
                </div>
            </div>
        </div>
        <div className="bottom">

        </div>
    </div>
  )
}

export default sidebar
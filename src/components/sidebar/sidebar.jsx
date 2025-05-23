import React, { useContext, useState } from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'

const sidebar = () => {

    const [extended, setextended] = useState(false)
    const { onSent, prevPrompts, setRecentPrompt, newchat, isActive, setIsActive } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }
    return (
        <div className={isActive ? "sidebar sidebar-dark" : "sidebar sidebar-light"}>
            <div className="top">
                <img onClick={() => setextended(prev => !prev)} className='menu' src={assets.menu_icon} alt="" />
                <div onClick={() => newchat()} className={isActive ? "new-chat new-chat-dark" : "new-chat new-chat-light"}>
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p className={isActive ? "p-dark" : ""}>New Chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {prevPrompts.map((item, index) => {
                            return (
                                <div onClick={() => loadPrompt(item)} className="recent-entry">
                                    <img src={assets.message_icon} alt="" />
                                    <p>{item.slice(0, 18)}...</p>
                                </div>
                            )
                        })}
                    </div>
                    : null}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default sidebar
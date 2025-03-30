import React, { useContext, useState } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context';

const Main = () => {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input,isActive,setIsActive} = useContext(Context);
  // const [isActive,setIsActive] = useState(false)

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && input) {
      onSent()
      }
    };

  return (
    <div className={isActive ? "main dark" : "main light"}>
      <div className='nav'>
        <p>Gemini</p>
        <div className='nav-left'>
          <img className={isActive ? "theme-img" : ""} src={isActive ? assets.dark_mode : assets.light_mode}  onClick={() => setIsActive(isActive=>!isActive)} alt="" />
          <img src={assets.user_icon2} alt="" />
        </div> 
      </div>
      <div className="main-container">
        {!showResult?
          <>
            <div className="greet">
              <p><span>Hey there..</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className={isActive ? "card card-dark" : "card card-light"}>
                  <p>Write a short sci-fi story about a robot that gains emotions.</p>
                  <img className={isActive ? "card-img-dark" : "card-img-light"} src={assets.compass_icon} alt="" />
              </div>
              <div className={isActive ? "card card-dark" : "card card-light"}>
                  <p>Generate a creative workout plan for someone who loves gaming.</p>
                  <img className={isActive ? "card-img-dark" : "card-img-light"} src={assets.bulb_icon} alt="" />
              </div>
              <div className={isActive ? "card card-dark" : "card card-light"}>
                  <p>Suggest five unique business ideas that don’t exist yet.</p>
                  <img className={isActive ? "card-img-dark" : "card-img-light"} src={assets.message_icon} alt="" />
              </div>
              <div className={isActive ? "card card-dark" : "card card-light"}>
                  <p>Describe a futuristic city in the year 2150 with advanced AI.</p>
                  <img className={isActive ? "card-img-dark" : "card-img-light"} src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
          :<div className="result">
            <div className="result-title">
              <img src={assets.user_icon2} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading?
                <>
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                </>
              :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
              }
            </div>
          </div>
        }
        
        <div className="main-bottom">
          <div className={isActive ? "search-box search-box-dark" : "search-box search-box-light"}>
            <input className={isActive ? "input-dark" : "input-light"} onChange={(e)=>setInput(e.target.value)} onKeyDown={handleKeyDown} value={input} type="text" placeholder='Enter a prompt here' />
            <div>
              {/* <img src={assets.gallery_icon} alt="" srcset="" /> */}
              {/* <img src={assets.mic_icon} alt="" srcset="" /> */}
              {input ?<img onClick={()=>onSent()} src={assets.send_icon} alt="" srcset="" /> :null}
            </div>
          </div>
          <p className='bottom-info'>
            Gemini can make mistakes. Check important info.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main

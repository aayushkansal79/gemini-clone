import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context';

const Main = () => {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);

  return (
    <div className='main'>
      <div className='nav'>
        <p>Sasta Gemini</p>
        <img src={assets.user_icon2} alt="" />
      </div>
      <div className="main-container">
        {!showResult?
          <>
            <div className="greet">
              <p><span>Haan Bhai, Chintu</span></p>
              <p>Aaj kya dikkat hai tujhe?</p>
            </div>
            <div className="cards">
              <div className="card">
                  <p>Or mummy kesi hai ?</p>
                  <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                  <p>Would you rather sleep with..!?</p>
                  <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                  <p>How to crack IIT ?</p>
                  <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                  <p>What is the currency of South Africa ?</p>
                  <img src={assets.code_icon} alt="" />
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
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Puchh, batata hu ..' />
            <div>
              <img src={assets.gallery_icon} alt="" srcset="" />
              <img src={assets.mic_icon} alt="" srcset="" />
              <img onClick={()=>onSent()} src={assets.send_icon} alt="" srcset="" />
            </div>
          </div>
          <p className='bottom-info'>
            Pehle log khet me kaam kiya karte the, fir Gemini chalane vale aagye
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main

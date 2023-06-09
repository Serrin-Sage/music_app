import { useEffect, useState } from "react"

const Screen = () => {
  
  return (
    <div className="screen-container">
      <div className="screen-content">
        <div className="left-screen-content">
          <div className='app-title'>songshare.io</div>
          {/* <h2>The best music, globally</h2> */}
          <div>
            <div className="user-selection">
              <div>Listener</div> <span>{`>`}</span>
            </div>
            <div className="user-selection">
              <div>Musician</div> <span>{`>`}</span>
            </div>
          </div>
          {/* <div>
            One text, every Friday.<br/>
            One song, one playlist, one album
          </div> */}
         
        </div>
        <div className="right-screen-content">
          <div className="subscriber-form">
              <form>
                <label className="name-label">
                  Subscriber Name:
                  <input type="text" name="user-name" className="user-input"></input>
                </label>
                <br/>
                <label>
                  Subscriber Phone Number
                  <input type="text" name="user-number" className="user-input"></input>
                </label>
              </form>
            </div>
            <button>Subsribe</button>
        </div>
      </div>
      
    </div>
  )
}

export default Screen
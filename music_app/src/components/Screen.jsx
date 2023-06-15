import { useEffect, useState } from "react"
import About from "./About"
import Listener from "./Listener"
import Musician from "./Musician"

const Screen = () => {

  const [screenFocus, setScreenFocus] = useState("listener")

  const userSelection = (selection) => {
    setScreenFocus(selection)
  }

  return (
    <div className="screen-container">
      <div className="screen-content">
        <div className="left-screen-content">
          <div className='app-title'>songshare.io</div>
          <div>
            <div className={screenFocus === "listener" ? "active-tab" : "user-selection"} onClick={() => userSelection("listener")}>
              <div>Listener</div> <span>{`>`}</span>
            </div>
            <div className={screenFocus === "musician" ? "active-tab" : "user-selection"} onClick={() => userSelection("musician")}>
              <div>Musician</div> <span>{`>`}</span>
            </div>
            <div className={screenFocus === "about" ? "active-tab" : "user-selection"} onClick={() => userSelection("about")}>
              <div>About</div> <span>{`>`}</span>
            </div>
          </div>
         
        </div>
        <div className="right-screen-content">
          {screenFocus === "listener" && <Listener /> }
          {screenFocus === "musician" && <Musician />}
          {screenFocus === "about" && <About />}
        </div>
      </div>
      
    </div>
  )
}

export default Screen
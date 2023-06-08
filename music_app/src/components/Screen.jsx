import { useEffect, useState } from "react"

const Screen = () => {
  
  const [screenActive, setScreenActive] = useState(false)
  
  useEffect(() => {
    setTimeout(() => {
      setScreenActive(true)
    }, 1000)
  }, [])
  return (
    <div className="screen-container">
      <div className={screenActive ? "screen-content" : "screen-off"}>
        <div className={screenActive ? "inner-screen-content" : "display-off"} >
          <h2>The best music, globally</h2>
          <div className="subscriber-form">
            <form>
              <label className="name-label">
                Subscriber Name:
                <input type="text"></input>
              </label>
              <input type="text"></input>
            </form>
          </div>
          <div>
            One text, every Friday.<br/>
            One song, one playlist, one album
          </div>
          <button>Subsribe</button>
        </div>
      </div>
      <div className='app-title'>songshare.io</div>
    </div>
  )
}

export default Screen
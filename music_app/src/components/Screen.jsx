import { useEffect, useState } from "react"

const Screen = () => {
  
  const [listenerFocus, setListenerFocus] = useState(true)
  const [musicianFocus, setMusicianFocus] = useState(false)

  const userSelection = (selection) => {
    if (selection === "listener") {
      setListenerFocus(true)
      setMusicianFocus(false)
    }

    if (selection === "musician") {
      setMusicianFocus(true)
      setListenerFocus(false)
    }
  }

  const ListenerScreen = () => {
    return (
      <div className="subscriber-form-container">
        <h2>The best music, globally</h2>
          <form className="subscriber-form">
            <label className="name-label">
              Enter Name
            </label>
              <input type="text" name="user-name" className="user-input"></input>
            <br/>
            <label className="name-label">
              Enter Number
            </label>
              <input type="number" name="user-number" className="user-input"></input>
          </form>
          <div className="tag-line">
            One text, every Friday.<br/>
            One song, one playlist, one album
          </div>
          <button className="subscribe-button">Subscribe</button>
      </div>
    )
  }

  const MusicianFocus = () => {
    return (
      <div className="artist-form-containter">
        <h2>Share your music, globally</h2>
        <form className="musician-form">
          <label className="name-label">Artist Name</label>
          <input type="text" name="artist_name" className="user-input"/>
          <br/>
          <label className="name-label">Song Name</label>
          <input type="text" name="song_name" className="user-input"/>
          <br />
          <label className="name-label">Description</label>
          <textarea type="text" name="description" className="user-input" id="song-description"/>
          <br />
          <label className="name-label">Email</label>
          <input type="text-box" name="artist_email" className="user-input"/>
        </form>
        <button className="submit-button">Submit</button>
      </div>
    )
  }
  return (
    <div className="screen-container">
      <div className="screen-content">
        <div className="left-screen-content">
          <div className='app-title'>songshare.io</div>
          <div>
            <div className="user-selection" onClick={() => userSelection("listener")}>
              <div>Listener</div> <span>{`>`}</span>
            </div>
            <div className="user-selection" onClick={() => userSelection("musician")}>
              <div>Musician</div> <span>{`>`}</span>
            </div>
            <div className="user-selection" onClick={() => userSelection("about")}>
              <div>About</div> <span>{`>`}</span>
            </div>
          </div>
         
        </div>
        <div className="right-screen-content">
          {listenerFocus && <ListenerScreen /> }
          {musicianFocus && <MusicianFocus />}
        </div>
      </div>
      
    </div>
  )
}

export default Screen
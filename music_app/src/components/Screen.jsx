const Screen = () => {
  return (
    <div className="screen-container">
      <div className="screen-content">
        <h2>The best music, globally</h2>
        <div className="subscriber-form">
          <form>
            <input type="text"></input>
            <input type="text"></input>
          </form>
        </div>
        <div>
          One text, every Friday.<br/>
          One song, one playlist, one album
        </div>
        <button>Subsribe</button>
      </div>
      <div className='app-title'>songshare.io</div>
    </div>
  )
}

export default Screen
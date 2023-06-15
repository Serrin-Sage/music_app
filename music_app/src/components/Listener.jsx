const Listener = () => {
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

export default Listener
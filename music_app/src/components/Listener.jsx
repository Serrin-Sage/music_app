const Listener = () => {

  const getModal = () => {
    const modal = document.querySelector(".submit-modal")
    return modal
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getModal().showModal()
  }
  return (
    <div className="subscriber-form-container">
        <h2>The best music, globally</h2>
            <form className="subscriber-form" onSubmit={handleSubmit}>
            <label className="name-label">
                Enter Name
            </label>
            <input type="text" name="user-name" className="user-input"></input>
            <br/>
            <label className="name-label">
                Enter Number
            </label>
            <input type="number" name="user-number" className="user-input"></input>
            <div className="tag-line">
                One text, every Friday.<br/>
                One song, one playlist, one album
            </div>
            <input type="submit" value="Subscribe" className="subscribe-button" />
        </form>
    </div>
  )
}

export default Listener
const Modal = () =>  {

  const getModal = () => {
    const modal = document.querySelector(".submit-modal")
    return modal
  }

  const closeModal = () => {
    getModal().close()
  }
  return (
    <div>
        Thanks for subscribing!<br/><br/>
        <button className="button" onClick={closeModal}>close</button>
    </div>
  )
}

export default Modal
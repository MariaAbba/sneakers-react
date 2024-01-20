import { useContext } from 'react'
import AppContext from '../context'
import arrowLeft from './../img/arrow.svg'

const Info = ({ title, image, description }) => {
  const { setCartOpened } = useContext(AppContext)

  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column mb-20">
      <img
        className="mb-20"
        width="120px"
        height="120px"
        src={image}
        alt="empty cart"
      />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button onClick={() => setCartOpened(false)} className="greenButton">
        <img src={arrowLeft} alt="arrow left" />
        Go back
      </button>
    </div>
  )
}

export default Info;
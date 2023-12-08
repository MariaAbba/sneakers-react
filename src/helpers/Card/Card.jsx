import heart from './../../img/heart.svg'
import plus from './../../img/plus.svg'
import './card.css'

const Card = ({ title, price, img, onClick }) => {
// const onClickButton = () => {
//   alert(1)
// }

  return (
    <div className="card">
      <div className="favourite">
        <img src={heart} alt="icon" />
      </div>
      <img className="trainers__photo" src={img} alt="Trainers-photo" />
      <h5 className="card__title">{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Price: </span>
          <b>{price} £</b>
        </div>
        <button className="card__btn" onClick={() => onClick()}>
          <img id="plus-btn" src={plus} alt="plusIcon" />
        </button>
      </div>
    </div>
  )
}

export default Card



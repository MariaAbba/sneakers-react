import { useState } from 'react'
import heart from './../../img/heart.svg'
import plus from './../../img/plus.svg'
import checked from './../../img/checked.svg'
import './card.scss'

const Card = ({ title, price, img, onPlus, clickOnFavorite }) => {
  const [isAdded, setIsAdded] = useState(false)

  const onClickPlus = () => {
    onPlus({title, img, price});
    setIsAdded(!isAdded)
  }

  return (
    <div className="card">
      <div className="favourite" onClick={clickOnFavorite}>
        <img src={heart} alt="icon" />
      </div>
      <img className="trainers__photo" src={img} alt="Trainers-photo" />
      <h5 className="card__title">{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Price: </span>
          <b>{price} £</b>
        </div>
        <img
          id="plus-btn"
          alt="plusIcon"
          src={isAdded ? checked : plus}
          onClick={() => onClickPlus()}
        />
      </div>
    </div>
  )
}

export default Card

import { useState } from 'react'
import PropTypes from 'prop-types'
import heart from './../../img/heart.svg'
import redHeart from './../../img/liked.svg'
import plus from './../../img/plus.svg'
import checked from './../../img/checked.svg'
import './card.scss'

const Card = ({id, title, price, img, onPlus, clickOnFavorite, bookmarked = false }) => {
  
  const [isAdded, setIsAdded] = useState(false)
  const [isFavourite, setIsFavourite] = useState(bookmarked)

  const onClickPlus = () => {
    onPlus({ title, img, price })
    setIsAdded(!isAdded)
  }

  const onClickFavourite = () => {
    // clickOnFavorite({ title, img, price })
    setIsFavourite(!isFavourite)
  }

  return (
    <div className="card">
      <div className="favourite" onClick={clickOnFavorite}>
        <img 
        onClick={onClickFavourite}
        src={isFavourite ? redHeart : heart} alt="icon" />
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

// Card.propTypes = {
//   title: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired, // Assuming price is a number, adjust accordingly
//   img: PropTypes.string.isRequired,
//   // onPlus: PropTypes.func.isRequired,
//   clickOnFavorite: PropTypes.func.isRequired,
// }
export default Card

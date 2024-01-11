import { useState } from 'react'
import ContentLoader from 'react-content-loader'

import heart from './../../img/heart.svg'
import redHeart from './../../img/liked.svg'
import plus from './../../img/plus.svg'
import checked from './../../img/checked.svg'
import './card.scss'

const Card = ({
  id,
  title,
  price,
  img,
  onPlus,
  onFavourite,
  bookmarked = false,
  added = false,
  loading = false
}) => {
  const [isAdded, setIsAdded] = useState((added) )
  const [isFavourite, setIsFavourite] = useState(bookmarked)

  const onClickPlus = () => {
    onPlus({ id, title, img, price })
    setIsAdded(!isAdded)
  }

  const onClickFavourite = () => {
    onFavourite({ id, title, img, price })
    setIsFavourite(!isFavourite)
  }

  return (
    <div className="card">   
  { loading ?
      <ContentLoader
        speed={2}
        width={155}
        height={250}
        viewBox="0 0 150 265"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="143" y="21" rx="0" ry="0" width="1" height="0" />
        <rect x="0" y="0" rx="10" ry="10" width="150" height="150" />
        <rect x="0" y="167" rx="5" ry="5" width="150" height="15" />
        <rect x="0" y="194" rx="5" ry="5" width="100" height="15" />
        <rect x="2" y="25" rx="5" ry="5" width="80" height="27" />
        <rect x="109" y="230" rx="10" ry="10" width="32" height="32" />
        <rect x="3" y="234" rx="5" ry="5" width="80" height="24" />
      </ContentLoader> : 
      <>
      <div className="favourite" onClick={onClickFavourite}>
        <img
          onClick={onClickFavourite}
          src={isFavourite ? redHeart : heart}
          alt="icon"
        />
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
      </>}
    </div>
  )
}

export default Card

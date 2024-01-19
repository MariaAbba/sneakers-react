import { useState, useContext } from 'react'
import ContentLoader from 'react-content-loader'
import AppContext from '../../context'

import heart from './../../img/heart.svg'
import redHeart from './../../img/liked.svg'
import plus from './../../img/plus.svg'
import checked from './../../img/checked.svg'
import './card.scss'

function Card({
  id,
  title,
  price,
  img,
  onPlus,
  onFavourite,
  bookmarked = false,
  loading = false,
}) {
  const { isItemAdded } = useContext(AppContext)
  const [isFavourite, setIsFavourite] = useState(bookmarked)

  console.log(title, isItemAdded(id))

  const onClickPlus = () => {
    onPlus({ id, title, img, price })
  }

  const onClickFavourite = () => {
    onFavourite({ id, title, img, price })
    setIsFavourite(!isFavourite)
  }

  return (
    <div className="card">
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
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
              src={isItemAdded(id) ? checked : plus}
              onClick={() => onClickPlus()}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default Card

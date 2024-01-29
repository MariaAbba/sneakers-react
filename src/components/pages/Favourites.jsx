import {useContext} from 'react'
import Card from '../../helpers/Card/Card'
import  AppContext from '../../context'

function Favourites() {

  const {favourites, onAddToFavourite } = useContext(AppContext)

  return (
    <div className="content">
      <div className=" d-flex align-center mb-40 justify-between">
        <h2 className="content__title">Favourites</h2>
      </div>
      <div className=" card__content d-flex">
        {favourites.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
            bookmarked={true}
            onFavourite={onAddToFavourite}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}

export default Favourites

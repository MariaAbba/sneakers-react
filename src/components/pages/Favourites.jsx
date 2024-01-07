import Card from '../../helpers/Card/Card'

function Favourites({ items, onAddToFavourite }) {
  return (
    <div className="content ">
      <div className=" d-flex align-center mb-40 justify-between">
        <h2 className="content__title">Favourites</h2>
      </div>
      <div className=" card__content d-flex">
        {items.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            price={item.price}
            img={item.img}
            bookmarked={true}
            onFavourite={onAddToFavourite}
          />
        ))}
      </div>
    </div>
  )
}

export default Favourites

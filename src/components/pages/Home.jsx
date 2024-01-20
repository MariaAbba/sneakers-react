import Card from '../../helpers/Card/Card'

import search from '../../img/search.svg'
import remove from '../../img/remove.svg'

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavourite,
  onAddtoCart,
  clearInput,
  isLoading,
}) {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
      <Card
        key={index}
        onFavourite={(obj) => onAddToFavourite(obj)}
        onPlus={(obj) => onAddtoCart(obj)}
        // added={isItemAdded(item && item.id)}
        loading={isLoading}
        {...item}
      />
    ))
  }

  return (
    <div className="content ">
      <div className=" d-flex align-center mb-40 justify-between">
        <h2 className="content__title">
          {searchValue ? `Search for "${searchValue}"` : 'All items'}
        </h2>
        <div className="search__block d-flex">
          <img src={search} className="searchIcon" alt="Search" />
          {searchValue && (
            <img
              onClick={clearInput}
              src={remove}
              className="clearIcon"
              alt="Clear"
            />
          )}
          <input
            className="searchInput"
            onChange={onChangeSearchInput}
            value={searchValue}
            type="text"
            placeholder="Search for an item, colour..."
          />
        </div>
      </div>
      <div className=" card__content d-flex">{renderItems()}</div>
    </div>
  )
}

export default Home

import Card from './helpers/Card/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

import { useState, useEffect } from 'react'
import axios from 'axios'

import search from './img/search.svg'
import remove from './img/remove.svg'

function App() {
  const [items, setItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [cartItems, setCartItems] = useState([])
  const [cartOpened, setCartOpened] = useState(false)

  useEffect(() => {
    axios
      .get('https://657b154d394ca9e4af13a351.mockapi.io/items')
      .then((res) => {
        setItems(res.data)
      })
  }, [])

  const onAddtoCart = (product) => {
    setCartItems((prev) => [...prev, product])
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const clearInput = () => {
    setSearchValue('')
  }
  // const deleteFromCart = (product) => {
  //   setCartItems()
  // }

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      )}
      {/* {cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null} */}
      <Header onClickCart={() => setCartOpened(true)} />
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
              placeholder="Search for an item, color..."
            />
          </div>
        </div>
        <div className=" card__content d-flex">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => (
              <Card
                key={item.title}
                title={item.title}
                price={item.price}
                img={item.img}
                clickOnFavorite={() => console.log('Added ')}
                onPlus={(item) => onAddtoCart(item)}
                // deleteItem={(item) => deleteFromCart(item)}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default App

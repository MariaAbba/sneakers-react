// import Card from './helpers/Card/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'
import Home from './components/pages/Home'
import Favourites from './components/pages/Favourites'

import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'

function App() {
  const [items, setItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [cartItems, setCartItems] = useState([])
  const [favourites, setFavourites] = useState([])
  const [cartOpened, setCartOpened] = useState(false)

  useEffect(() => {
    axios
      .get('https://657b154d394ca9e4af13a351.mockapi.io/items')
      .then((res) => {
        setItems(res.data)
      })
    axios
      .get('https://657b154d394ca9e4af13a351.mockapi.io/cart')
      .then((res) => {
        setCartItems(res.data)
      })
    axios
      .get('https://6596e3ed6bb4ec36ca038517.mockapi.io/favourites')
      .then((res) => {
        setFavourites(res.data)
      })
  }, [])

  const onAddtoCart = (product) => {
    axios.post('https://657b154d394ca9e4af13a351.mockapi.io/cart', product)
    setCartItems((prev) => [...prev, product])
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://657b154d394ca9e4af13a351.mockapi.io/cart/${id}`)
    setCartItems((prev) => [...prev.filter((item) => item.id !== id)])
  }

  const onAddToFavourite = (product) => {
    if (favourites.find((favObj) => favObj.id === product.id)) {
      axios.delete(
        `https://657b154d394ca9e4af13a351.mockapi.io/favourites/${product.id}`
      )
      setFavourites((prev) => prev.filter((item) => item.id !== product.id))
    } else {
      axios.post(
        'https://6596e3ed6bb4ec36ca038517.mockapi.io/favourites',
        product
      )
      setFavourites((prev) => [...prev, product])
    }
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const clearInput = () => {
    setSearchValue('')
  }

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      {/* {cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null} */}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              // onAddToFavourite={onAddToFavourite}
              onAddtoCart={onAddtoCart}
            />
          }
        />
        <Route
          path="/favourites"
          element={
            <Favourites
              items={favourites}
              onAddToFavourite={onAddToFavourite}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App

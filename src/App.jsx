// import Card from './helpers/Card/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'
import Home from './components/pages/Home'
import Favourites from './components/pages/Favourites'
import AppContext from './context'

import { useState, useEffect} from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'

function App() {
  const [items, setItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [cartItems, setCartItems] = useState([])
  const [favourites, setFavourites] = useState([])
  const [cartOpened, setCartOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try{
      const cartResponse = await axios.get(
        'https://657b154d394ca9e4af13a351.mockapi.io/cart'
      )
      const favouritesResponse = await axios.get(
        'https://6596e3ed6bb4ec36ca038517.mockapi.io/favourites'
      )
      const itemsResponse = await axios.get(
        'https://657b154d394ca9e4af13a351.mockapi.io/items'
      )
      setIsLoading(false)

      setCartItems(cartResponse.data)
      setFavourites(favouritesResponse.data)
      setItems(itemsResponse.data)
    } catch (error){
      alert('Mistake loading data')
    }
  }
    fetchData()
  }, [])

  const onAddtoCart = (product) => {
    axios.delete(
      `https://657b154d394ca9e4af13a351.mockapi.io/cart/${product.id}`
    )
    if (cartItems.find((item) => Number(item.id) === Number(product.id))) {
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(product.id))
      )
    } else {
      axios.post('https://657b154d394ca9e4af13a351.mockapi.io/cart', product)
      setCartItems((prev) => [...prev, product])
    }
  } 

  const onRemoveItem = (id) => {
    console.log(id)
    axios.delete(`https://657b154d394ca9e4af13a351.mockapi.io/cart/${id}`)
    setCartItems((prev) => [...prev.filter((item) => item.id !== id)])
  }

  const onAddToFavourite = async (obj) => {
        console.log(obj)
    try {
      if (favourites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://657b154d394ca9e4af13a351.mockapi.io/favourites/${obj.id}`
        )
        setFavourites((prev) => prev.filter((item) => item.id !== obj.id))
      } else {
        const { data } = await axios.post(
          'https://6596e3ed6bb4ec36ca038517.mockapi.io/favourites',
          obj
        )
        setFavourites((prev) => [...prev, data])
      }
    } catch (error) {
      alert('Could not add to the favourites')
    }
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const clearInput = () => {
    setSearchValue('')
  }

  return (
    <AppContext.Provider value={{items, cartItems, favourites }}>
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
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavourite={onAddToFavourite}
                onAddtoCart={onAddtoCart}
                isLoading={isLoading}
                clearInput={clearInput}
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
    </AppContext.Provider>
  )
}

export default App

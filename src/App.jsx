import Card from './helpers/Card/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'
import { useState, useEffect  } from 'react'

import plus from './img/plus.svg'
import heartFilled from './img/heart-filled.svg'
import heart from './img/heart.svg'
import search from './img/search.svg'
import arrowRight from './img/arrow-right.svg'
import removeBtn from './img/remove-btn.svg'
// import trainers1 from './img/trainers-1.jpg'
// import trainers2 from './img/trainers-2.jpg'
// import trainers3 from './img/trainers-3.jpg'
// import trainers4 from './img/trainers-4.jpg'


function App() {
  const [items, setItems] = useState([
     ])
  const [cartOpened, setCartOpened] = useState(false)

useEffect(() => {
    fetch('https://657b154d394ca9e4af13a351.mockapi.io/items')
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        setItems(json)
      })
})

  return (
    <div className="wrapper">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
      {/* {cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null} */}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content ">
        <div className=" d-flex align-center mb-40 justify-between">
          <h2 className="content__title">All trainers</h2>
          <div className="search__block d-flex">
            <img src={search} alt="Search" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="d-flex">
          {items.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              img={item.img}
              // clickOnPlus={() => console.log('Added an item')}
              // clickOnFavorite={() => console.log('Added to favourites')}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App

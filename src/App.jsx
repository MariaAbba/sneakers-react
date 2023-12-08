import Card from './helpers/Card/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

import plus from './img/plus.svg'
import heartFilled from './img/heart-filled.svg'
import heart from './img/heart.svg'
import search from './img/search.svg'
import arrowRight from './img/arrow-right.svg'
import removeBtn from './img/remove-btn.svg'
import trainers1 from './img/trainers-1.jpg'
import trainers2 from './img/trainers-2.jpg'
import trainers3 from './img/trainers-3.jpg'
import trainers4 from './img/trainers-4.jpg'

const trainers = [
  {
    title: 'Air Jordan 1 Retro High OG',
    price: 98.97,
    img: trainers1,
  },
  {
    title: 'Nike Air Max Bliss',
    price: 62.47,
    img: trainers2,
  },
  {
    title: 'Nike Air Max Plus',
    price: 174.95,
    img: trainers3,
  },
  {
    title: 'Nike Air Max 90',
    price: 123.97,
    img: trainers4,
  },
]

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content ">
        <div className=" d-flex align-center mb-40 justify-between">
          <h2 className="content__title">All trainers</h2>
          <div className="search__block d-flex">
            <img src={search} alt="Search" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="d-flex">
          {trainers.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              img={item.img}
              onClick={() => console.log(item)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App

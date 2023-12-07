import Card from './components/Card'
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

function App() {
  return (
    <div className="wrapper">
<Drawer/>
<Header/>
      <div className="content ">
        <div className=" d-flex align-center mb-40 justify-between">
          <h2 className="content__title">All trainers</h2>
          <div className="search__block d-flex">
            <img src={search} alt="Search" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="d-flex">
<Card/>
<Card/>
<Card/>
<Card/>
          {/* <div className="card">
            <img
              className="trainers__photo"
              src={trainers2}
              alt="Trainers-photo"
            />
            <h5 className="card__title">Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price: </span>
                <b>120 £</b>
              </div>
              <button className="card__btn">
                <img id="plus-btn" src={plus} alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              className="trainers__photo"
              src={trainers3}
              alt="Trainers-photo"
            />
            <h5 className="card__title">Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price: </span>
                <b>120 £</b>
              </div>
              <button className="card__btn">
                <img id="plus-btn" src={plus} alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              className="trainers__photo"
              src={trainers4}
              alt="Trainers-photo"
            />
            <h5 className="card__title">Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price: </span>
                <b>120 £</b>
              </div>
              <button className="card__btn">
                <img id="plus-btn" src={plus} alt="" />
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default App

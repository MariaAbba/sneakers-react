import trainers1 from './../img/trainers-1.jpg'
import heart from './../img/heart.svg'
import plus from './../img/plus.svg'

const Card = () => {
  return (
    <div className="card">
      <div className="favourite">
        <img src={heart} alt="icon" />
      </div>
      <img className="trainers__photo" src={trainers1} alt="Trainers-photo" />
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
  )
}

export default Card

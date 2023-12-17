import arrowRight from './../img/arrow-right.svg'
import removeBtn from './../img/remove-btn.svg'
import trainers1 from './../img/trainers-1.jpg'

function Drawer({ onClose, items = [] }) {
  return (
    <div className="drawer__overlay">
      <div className="drawer">
        <h2 className="drawer__title">
          Shopping Bag
          <img
            onClick={() => onClose()}
            className="remove-btn cu-p"
            src={removeBtn}
            alt="Close"
          />
        </h2>

        <div className="items">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
              <div
                className="cartItemImg"
                style={{ backgroundImage: `url(${obj.img})` }}
              ></div>

              <div className="mr-20">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} £</b>
              </div>
              <img className="remove-btn" src={removeBtn} alt="Remove icon" />
            </div>
          ))}
        </div>

        <div className="shoppingTotal">
          <ul>
            <li className="d-flex">
              <span>Total: </span>
              <div></div>
              <b>240 £</b>
            </li>
            <li className="d-flex">
              <span>VAT 5%: </span>
              <div></div>
              <b>58 £</b>
            </li>
          </ul>

          <button className="greenButton">
            Continue
            <img src={arrowRight} alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Drawer

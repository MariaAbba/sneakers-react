import PropTypes from 'prop-types'
import { useState, useContext } from 'react'
import arrowRight from './../img/arrow-right.svg'
import removeBtn from './../img/remove-btn.svg'
import emptyCart from './../img/empty-cart.jpg'
import AppContext from '../context'

function Drawer({ onClose, items = [], onRemove }) {
  const { setCartItems } = useContext(AppContext)
  const [isOrderComplete, setIsOrderComplete] = useState(false)

  const onClickOrder = () => {
    setIsOrderComplete(true)
    setCartItems([])
  }

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
        {items.length > 0 ? (
          <div className="d-flx flex-column flex">
            <div className="items">
              {items.map((obj, index) => {
                return (
                  <div
                    key={index}
                    className="cartItem d-flex align-center mb-20"
                  >
                    <div
                      className="cartItemImg"
                      style={{ backgroundImage: `url(${obj.img})` }}
                    ></div>
                    <div className="mr-20">
                      <p className="mb-5">{obj.title}</p>
                      <b>{obj.price} £</b>
                    </div>
                    <img
                      onClick={() => onRemove(obj.id)}
                      className="remove-btn"
                      src={removeBtn}
                      alt="Remove icon"
                    />
                  </div>
                )
              })}
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
              <button onClick={onClickOrder} className="greenButton">
                Continue
                <img src={arrowRight} alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column mb-20">
            <img
              className="mb-20"
              width="120px"
              height="120px"
              src={emptyCart}
              alt="empty cart"
            />
            <h2>The cart is empty</h2>
            <p className="opacity-6">
              In order to proceed with the shopping, add at least one item.
            </p>
            <button onClick={() => onClose()} className="greenButton">
              Go back
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

Drawer.propTypes = {
  onClose: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default Drawer

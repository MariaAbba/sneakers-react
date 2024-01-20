import PropTypes from 'prop-types'
import Info from './Info'
import arrowRight from './../img/arrow-right.svg'
import removeBtn from './../img/remove-btn.svg'
import emptyCart from './../img/empty-cart.jpg'

function Drawer({ onClose, items = [], onRemove }) {
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
            {items.map((obj, index) => (
              <div key={index} className="cartItem d-flex align-center mb-20">
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
      ) : (
        <Info
          title="The cart is empty"
          description="To proceed with shopping add at least one item"
          image={emptyCart}
        />
      )}
    </div>
  </div>
}

Drawer.propTypes = {
  onClose: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
}
export default Drawer

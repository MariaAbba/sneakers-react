import { Link } from 'react-router-dom'
import logo from './../img/logo.png'
import cart from './../img/cart.svg'
import user from './../img/user.svg'
import heart from './../img/heart.svg'
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <header className="d-flex justify-between align-center">
      <Link to="/">
        <div className="d-flex align-center">
          <img id="logo" src={logo} alt="Logo" />
          <div className="headerInfo">
            <h1 className="title__header">React Trainers</h1>
            <p className="subtitle__header opacity-5">
              Shop for the best trainers
            </p>
          </div>
        </div>
      </Link>
      <div>
        <ul className="d-flex">
          <li onClick={() => props.onClickCart()} className="mr-20 cu-p">
            <img id="user__icon" src={cart} alt="Cart" />
            <span className="cart__price">120 £</span>
          </li>
          <li className="mr-20 cu-p">
            <Link to="/favourites">
              <img src={heart} alt="Bookmarks" width={18} height={18} />
            </Link>
          </li>
          <li>
            <img id="user__icon" src={user} alt="Cart" />
          </li>
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  onClickCart: PropTypes.func.isRequired,
}
export default Header

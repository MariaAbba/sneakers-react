import logo from './../img/logo.png'
import cart from './../img/cart.svg'
import user from './../img/user.svg'

const Header = () => {
  return (
    <header className="d-flex justify-between align-center">
      <div className="d-flex align-center">
        <img id="logo" src={logo} alt="Logo" />
        <div className="headerInfo">
          <h1 className="title__header">React Trainers</h1>
          <p className="subtitle__header opacity-5">
            Shop for the best trainers
          </p>
        </div>
      </div>
      <div>
        <ul className="d-flex">
          <li className="mr-30">
            <img id="user__icon" src={cart} alt="Cart" />
            <span className="cart__price">120 £</span>
          </li>
          <li>
            <img id="user__icon" src={user} alt="Cart" />
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
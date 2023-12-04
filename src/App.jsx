import logo from './../public/img/logo.png'
import cart from './../public/img/cart.svg'
import user from './../public/img/user.svg'

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img id="logo" src={logo} alt="" />
          <div className="headerInfo">
            <h3>React Trainers</h3>
            <p>The shop for the best trainers</p>
          </div>
        </div>
        <div>
          <ul className="headerRight">
            <li>
              <img src={cart} alt="Cart" />
              <span>120 £</span>
            </li>
            <li>
              <img src={user} alt="Cart" />
            </li>
          </ul>
        </div>
      </header>
      <div className="content">
        <h1>All trainers</h1>
        ...
      </div>
    </div>
  )
}

export default App

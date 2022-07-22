import { NavLink } from 'react-router-dom'
import './style.css'

const NavBar = (props) => (
  <div>
    <nav className="nav">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
      <NavLink to="/sing-in" className="nav-link">
        Sign in
      </NavLink>
      <NavLink
        to={`/cart/${props.totalQuantity}/${props.totalPrice}`}
        className="nav-link"
      >
        Cart
      </NavLink>
    </nav>
  </div>
)

export default NavBar

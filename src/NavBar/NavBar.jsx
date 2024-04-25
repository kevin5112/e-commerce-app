import { NavLink } from 'react-router-dom';
import '../App.css';
import './NavBar.css';

function NavBar() {
  return (
    <>
      <h1>CDOT</h1>
      <div className="nav-bar-root">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'linkActive sideLinks' : 'sideLinks'
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? 'linkActive sideLinks' : 'sideLinks'
          }
        >
          Shop
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? 'linkActive sideLinks' : 'sideLinks'
          }
        >
          Cart
        </NavLink>
      </div>
    </>
  );
}

export default NavBar;

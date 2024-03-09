import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fact">
      <ul>
        <li>
          <Link to="/">Pagina Principal</Link>
        </li>
        <li>
          <Link to="/logIn">Log In</Link>
        </li>
        <li>
          <Link to="/signUp">Sign Up</Link>
        </li>
        <li>
          <Link to="/miCuenta">Mi Cuenta</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

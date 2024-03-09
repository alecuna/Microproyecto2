import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link className="link" to="/">
            Pagina Principal
          </Link>
        </li>
        <li>
          <Link className="link" to="/logIn">
            Log In
          </Link>
        </li>
        <li>
          <Link className="link" to="/signUp">
            Sign Up
          </Link>
        </li>
        <li>
          <Link className="link" to="/miCuenta">
            Mi Cuenta
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

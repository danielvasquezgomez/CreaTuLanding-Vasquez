import CartWidget from "./CartWidget"
import "./navbar.css"
import logoVerde from "../../assets/navbar/logoVerde.png"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
    <nav>
        <Link to='/'>
          <img className="logo-verde" src={logoVerde} alt="Logo Principal" />
        </Link>
          
        <ul>
            <li>
              <Link to="/category/plantas">Plantas</Link>
            </li>
            <li>
              <Link to="/category/macetas">Macetas</Link>
            </li>
            <li>
              <Link to="/category/servicio">Servicio y Asesoría</Link>
            </li>
        </ul>
        <CartWidget></CartWidget>
    </nav>
    
    </>
  )
}

export default NavBar
import { CartWidget } from "./CartWidget"
import "./NavBar.css"
import logoVerde from "../assets/navbar/logoVerde.png"

export const NavBar = () => {
  return (
    <>
    <nav>
        <img class="logo-verde" src={logoVerde} alt="Logo Principal" />
        <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
        <CartWidget></CartWidget>
    </nav>
    
    </>
  )
}

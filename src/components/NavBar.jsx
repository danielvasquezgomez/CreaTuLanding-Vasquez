import { CartWidget } from "./CartWidget"
import "./NavBar.css"
import logoVerde from "../assets/navbar/logoVerde.png"

export const NavBar = () => {
  return (
    <>
    <nav>
        <img class="logo-verde" src={logoVerde} alt="Logo Principal" />
        <ul>
            <li>Plantas</li>
            <li>Macetas</li>
            <li>Servicio y Asesoría</li>
            <li>Contacto</li>
        </ul>
        <CartWidget></CartWidget>
    </nav>
    
    </>
  )
}

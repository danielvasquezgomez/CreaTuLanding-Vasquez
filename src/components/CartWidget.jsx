import cart from "../assets/navbar/cart.svg"
import "./CartWidget.css"; 


export const CartWidget = () => {
    const itemCount = 5; // Valor estático para la notificación. Provisional hasta proximas entregas
  return (
    <div className="cart-container">
      <img src={cart} alt="Cart" className="cart-icon" />
      {itemCount > 0 && <div className="notification-bubble">{itemCount}</div>}
    </div>
  )
}

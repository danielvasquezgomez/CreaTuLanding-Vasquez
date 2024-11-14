import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import cart from "../../assets/navbar/cart.svg"
import "./cartwidget.css"; 


const CartWidget = () => {
  const {totalQuantity} = useContext(cartContext) 

  const total = totalQuantity()

  return (
    <Link to="/cart"  className="cart-container">
      <img src={cart} alt="Cart" className="cart-icon" />
      <p className="notification-bubble">{total >= 1 && total}</p>
    </Link>
  )
}

export default CartWidget
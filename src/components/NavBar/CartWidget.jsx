import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import cart from "../../assets/navbar/cart.svg"
import "./cartwidget.css"; 


const CartWidget = () => {
  const {totalQuantity} = useContext(cartContext) 

  return (
    <Link to="/cart"  className="cart-container">
      <img src={cart} alt="Cart" className="cart-icon" />
      <p className="notification-bubble">{totalQuantity()}</p>
    </Link>
  )
}

export default CartWidget
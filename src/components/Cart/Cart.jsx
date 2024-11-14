import { useContext } from "react"
import { cartContext } from "../../context/CartContext"



const Cart = () => {
    const {cart, totalPrice, deleteProductById, deleteCart} = useContext(cartContext)
    return (
        <div> 
            {
                cart.map((productCart) => (
                    <div key={productCart.id} style={{display: "flex", justifyContent: "space-around"}}>
                        <img src={productCart.image} alt="" width={150}/>
                        <p>{productCart.name}</p>
                        <p>Precio c/u: {productCart.price}</p>
                        <p>Cantidad: {productCart.quantity}</p>
                        <p>Precio Parcial: {productCart.quantity * productCart.price}</p>
                        <button onClick={() => deleteProductById(productCart.id)}>Eliminar Producto</button>
                    </div>

                ))
            }
            <p>Precio Total: {totalPrice()}</p>
            <button onClick={deleteCart}>Vaciar Carrito</button>
        </div>
    )
}

export default Cart
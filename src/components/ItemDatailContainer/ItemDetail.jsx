import "./itemdetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { cartContext } from "../../context/CartContext"


const ItemDetail = ({ product }) => {
  const{addProductInCart } = useContext(cartContext)

  const addProduct = (count) => {
    const productCart = { ...product, quantity: count }
    
    addProductInCart(productCart)
  }

  return (
    <div className="item-detail">
      <img src={product.image} className="imagenprin" alt="" width={500} />
      <div className="text-detail-container">
        <h2 className="title-detail">{product.name}</h2>
        <p className="text-detail">{product.description}</p>
        <p className="text-descrip">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam illum corporis sapiente at, natus tempore beatae voluptatem id sunt? Distinctio dolor voluptas quaerat, vel reiciendis inventore illo nam in porro.</p>
        <p className="text-detail">Precio: ${product.price}</p>
        <ItemCount initial={0} stock={product.stock} addProduct={addProduct} />
      </div>

      
    </div>
  )
}
export default ItemDetail
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"

const Item = ({product}) => {
  return (
    <div className="item">
      <img src={product.image} className="img-item" alt="" />
      <h2 className="text-item">{product.name}</h2>
      <p className="text-item">Precio: ${product.price}</p>
      <Link to={"/detail/" + product.id}> <p className="detalles">Ver detalles</p> </Link>
      
      <ItemCount initial={0} stock={10} onAdd={(quantity) => console.log("Cantidad Agregada", quantity)}/>
      
    </div>
    
    
  )
}

export default Item
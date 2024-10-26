import "./itemdetail.css"

const ItemDetail = ({ product }) => {
  return (
    <div className="item-detail">
      <img src={product.image} className="imagenprin" alt="" width={600} />
      <div className="text-detail-container">
        <h2 className="title-detail">{product.name}</h2>
        <p className="text-detail">{product.description}</p>
        <p className="text-detail">Precio: ${product.price}</p>
        <p className="text-descrip">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam illum corporis sapiente at, natus tempore beatae voluptatem id sunt? Distinctio dolor voluptas quaerat, vel reiciendis inventore illo nam in porro.</p>
      </div>
    </div>
  )
}
export default ItemDetail
import { getProducts } from "../../data/data.js"
import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import "./itemlistcontainer.css"

export const ItemListContainer = (props) => {
  const [products, setProducts] = useState([])
  const { idCategory } = useParams()

  useEffect(()=> {
    getProducts()
      .then((data)=> {
        if(idCategory){
          const producsFilter = data.filter(  (product) => product.category === idCategory )
          setProducts(producsFilter)
        }else{
          setProducts(data)
        }    
    })
    .catch((error)=> {
      console.error(error)
    })
    .finally(()=> {
      console.log("Finalizo Compra")
    })
  }, [idCategory])

  return (
    <div className="itemlistcontainer">
      <h1>{props.mensaje}</h1>
      <ItemList products={products}/>
    </div>
    
  )
}

export default ItemListContainer
import { useState, useEffect } from "react"
import db from "../../db/db.js"
import { getDoc, doc } from "firebase/firestore"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const { idProduct } = useParams()

    const getProductsById = () => {
        const docRef = doc( db, "products", idProduct )
        getDoc(docRef)
            .then((dataDb)=> {
                const data = {id: dataDb.id, ...dataDb.data()}
                setProduct(data)
            })
    }

    useEffect(()=> {
          getProductsById()
    },  [] )

    return (
        <ItemDetail product={product} />
    )
}

export default ItemDetailContainer
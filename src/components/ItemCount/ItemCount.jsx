import { useState } from "react";
import "./itemcount.css"

const ItemCount = ({ stock, initial, addProduct }) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="Counter">
            <div className="Controls">
                <button className="Button" onClick={decrement}>-</button>
                <h4 className="Number">{count}</h4>
                <button className="Button" onClick={increment}>+</button>
                <button className="Button" onClick={() => addProduct(count)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
            
        </div>
    );
};

export default ItemCount;

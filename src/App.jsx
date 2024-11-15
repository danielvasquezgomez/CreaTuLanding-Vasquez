
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemDetailContainer from './components/ItemDatailContainer/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'
import Cart from './components/Cart/Cart.jsx'
import Checkout from './components/Checkout/Checkout.jsx'


function App() {  
  return (
    <div className='container-app'>
      <BrowserRouter>
        <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer mensaje="Bienvenido, qué nunca falten plantas en tu vida!" />}/>
          <Route path="/category/:idCategory" element={ <ItemListContainer /> } />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer /> } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout"element={<Checkout/>}/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
        
    </div>
  )
}

export default App
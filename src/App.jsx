
import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'
import { NavBar } from './components/NavBar/NavBar.jsx'
import ItemDetailContainer from './components/ItemDatailContainer/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {  
  return (
    <div className='container-app'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer mensaje="Bienvenido, qué nunca falten plantas en tu vida!" />}/>
          <Route path="/category/:idCategory" element={ <ItemListContainer /> } />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer /> } />
        </Routes>
      </BrowserRouter>
        
    </div>
  )
}

export default App
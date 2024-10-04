import './App.css'
import { ItemListContainer } from './components/ItemListContainer'
import { NavBar } from './components/NavBar'

function App() {  
  return (
    <>
    <NavBar></NavBar>
    <ItemListContainer mensaje="Bienvenido, qué nunca te falten plantas en tu vida!" ></ItemListContainer>   
    </>
  )
}

export default App

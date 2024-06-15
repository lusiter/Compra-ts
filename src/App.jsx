
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from './components/Header'
import Producto from './components/Producto'
import { useState } from 'react'
import productsData from './data/products.json'




function App() {
 
  const[data, setData] = useState();
  const [cart, setCart]= useState([]);

  
  
  const addCart = (compra, option) => {
    const itemExists = cart.findIndex(item => item.id === compra.id)

    
  }

  const agregarAlCarrito = (item, opcion)=>{
    const itemExists = compra.findIndex(compra => compra.id === item.id && compra.opcion.id ===opcion.id)

    if(itemExists >= 0){
    const cartUpdated = [... cart]
    cartUpdated[itemExists].quantity ++
     setCart[cartUpdated]
    }else{
    const newItem ={
id: item.id,
name: item.name,
description: item.descripcion,
price:item.price,
opcion: opcion,
quantity:1


    }
    setCart([...cart, newItem]) 
   

    }
    

  }

  const agregarAlCarritoa = (item, opcion)=>{
    const itemExists = cart.findIndex(compra => compra.id === item.id && compra.opcion.id === opcion.id)

    if(itemExists >= 0){
      const updatedCart = [...cart]
      updatedCart[itemExists].quantity++
      setCart[updatedCart]
    }else{
    const newItem ={
      id: item.id,
      name:item.name,
      image:item.image,
      description:item.description,
      opcion: opcion,
      quantity:1
    }
    setCart([...cart,newItem])
    }
  }
  


  return (
    <>






  
   <Header/>

   

<main className="container-xl mt-5">
    <h2 className="text-center">Productos</h2>

    <div className="row mt-5">
      {productsData.map((compra) => (

<Producto
key={compra.id}
compra={compra}
cart={cart}


/>
      )
      )  }
     
    </div>
</main>



    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>

    </>
  )
}

export default App

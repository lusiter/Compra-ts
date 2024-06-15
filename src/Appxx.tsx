import Headerxx from "./components/Headerxx"
import Productoxx from "./components/Productoxx"

import { useCart } from "./hooks/useCart"
 

function Appxx () {
const {prodData,
    cart,
    searchTerm,
    handleSearchChange,agregarAlCarrito,removeFromCart,increaseQuantity,
    decreaseQuantity,
    clearCart,
    isEmpty, 
    cartTotal,
    } = useCart()

   

     return (

    <>   
    
    <Headerxx
    cart={cart}
    removeFromCart={removeFromCart}
    increaseQuantity={increaseQuantity}
    decreaseQuantity={decreaseQuantity}
    clearCart={clearCart}
    isEmpty={isEmpty}
    cartTotal={cartTotal}
    />
    
     <main className="container-xl mt-5">
        <h2 className="text-center">Productos</h2>

        <div className="row mt-5">
        <div className="mb-3 ">
              <input
                type="text"
                placeholder="Buscar producto..."
                className="btn btn-dark w-100"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            {prodData
            .filter((compra) =>
              compra.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((compra) =>(
                    <Productoxx
                    key={compra.id}
                    compra={compra}
                    agregarAlCarrito={agregarAlCarrito}
                    />
                ))
}
            
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

export default Appxx

//import prod from "../data/pro.json"
import {db} from '../data/pro'
import type {Compra,Option, CartItem} from '../types'
import { useState, useEffect, useMemo,  ChangeEvent } from "react"

export const useCart =()=>{


const initialCart = () :CartItem[]=> {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
  
  }

const [prodData] = useState(db)
const [cart, setCart]= useState(initialCart)


useEffect(() =>{
localStorage.setItem('cart', JSON.stringify(cart))
}, [cart] )


// Estado para almacenar el término de búsqueda
const [searchTerm, setSearchTerm] = useState("");

// Función para manejar cambios en la barra de búsqueda
const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
setSearchTerm(event.target.value);
};


const agregarAlCarrito = (item : Compra, opcion:Option) =>{

//const uniqueId = parseInt(`${item.id}${opcion.id}`);

const itemExists = cart.findIndex(compra => compra.id ===item.id && compra.option.id === opcion.id)
if (itemExists >= 0 ){
const updatedCart = [...cart]
updatedCart[itemExists].quantity++
setCart(updatedCart)
}else{
const newItem : CartItem ={

  ...item,

    id: item.id, // Generar un nuevo ID para el artículo
    
    image: item.image,
    name: item.name,
    option:opcion,
    quantity: 1
}


setCart([...cart, newItem])
}

}
//region GET

//   function removeFromCartc(idNew){
    // tenemos este callbakc, valor previo del carrito - .filter nos permite acceder al array (guitar accede a cada guitara de forma individual)filtrame las guirtarras cullo id sea diferente !== al que te estoy pasando
    //ejemplo en el carrito tenemos 3 guitaras diferentes y entonses queremos eliminar 1 enotnces lo que compara el codigo es que se trae exclusiva mente esa que se esta seleccionando y deja el resto normales
   //setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))

   //.filter no muta el carrito
   
//    setCart(prevCart => prevCart.filter(compra => compra.idNew !== idNew ))
  
  //}

  function removeFromCart( option: Option){
    // tenemos este callbakc, valor previo del carrito - .filter nos permite acceder al array (guitar accede a cada guitara de forma individual)filtrame las guirtarras cullo id sea diferente !== al que te estoy pasando
    //ejemplo en el carrito tenemos 3 guitaras diferentes y entonses queremos eliminar 1 enotnces lo que compara el codigo es que se trae exclusiva mente esa que se esta seleccionando y deja el resto normales
   //setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))

   //.filter no muta el carrito
   
   setCart(prevCart => prevCart.filter(
    compra => compra.option.id !== option.id))
  
  }



function increaseQuantity(id: Compra['id'], option: Option){
const updatedCart = cart.map(item => {
if(item.id === id && item.option.id === option.id){
    return{
        ...item,
        quantity:item.quantity +1
    }
}
return item
})
setCart(updatedCart)
}

function decreaseQuantity(id: Compra['id'], option: Option){
const updateCart = cart.map(item => {
 if(item.id ===id && item.option.id ===option.id && item.quantity > 1){
    return{
        ...item,
        quantity:item.quantity -1
    }
 }
 return item
})
setCart(updateCart)
}

function clearCart(){
setCart([])
}



// Header
 //react cuando hacemos una accion el render lo reliza completo, entonces useMemo lo que hace es que cuando el carrito se actualize con alguna accion se aplique useMemo para evitar render innesario [cart ]es arreglo de dependecias
 const isEmpty = useMemo(() => cart.length === 0, [cart])


 //useMemo es un hook enfocado a performance pero su desventaja es que no es tan recomendable hacerlo muy a memnudo ya que hay paginas que puedan manejar muchos datos
 //const cartTotal = useMemo(() => cart.reduce((total, item) => 
 //total + (item.quantity *item.option.price),0),[cart])
 const cartTotal = useMemo(() => {
  return cart.reduce((total, item) => {
    if (item.option) {
      return total + (item.quantity * item.option.price);
    } else {
      console.error("Item in cart is missing option:", item);
      return total;
    }
  }, 0);
}, [cart]);



return{
prodData,
cart,
searchTerm,
handleSearchChange,
agregarAlCarrito,
removeFromCart,
increaseQuantity,
decreaseQuantity,
clearCart,
isEmpty,
cartTotal

}
}
import { useState } from "react"
import type {Compra, Option} from '../types'

type CompraProps ={
    compra: Compra,
    agregarAlCarrito: (item: Compra, opcion: Option) => void
}

const Productoxx = ({compra, agregarAlCarrito}: CompraProps) =>{

const [selectOption,setSelectOption] = useState<Option | null>(null)

         const handleAgregarAlCarrito =()=>{
            if(selectOption){
                agregarAlCarrito (compra, selectOption)
                setSelectOption(null)
            }
            
         }
         

    const {name, image, description, price} = compra


    
  return (
    <>

<div className="col-md-6 col-lg-4 my-4 row align-items-center">
           
    <div className="col-4">

        
                    <img className="img-fluid" src={`./img/${image}.jpg`} alt="imagen guitarra" />
                </div>
                <div className="col-8">
                  
                    <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                    <p>{description}</p>
<select className="fw-black text-primary fs-6"
value={selectOption ? JSON.stringify(selectOption): ''}
onChange={(e)=> setSelectOption(JSON.parse(e.target.value))}>
{!selectOption && <option value="">Seleccione</option>}

{compra.options.map(opcion =>(
   <option key={opcion.id} value={JSON.stringify(opcion)}>
    {opcion.name} - ${opcion.price} 
   </option>

))}

</select>

                    <p className="fw-black text-primary fs-3">${price}</p>

                    <button 
                        type="button"
                        className="btn btn-dark w-100"
                        onClick={handleAgregarAlCarrito}
                    >Agregar al Carrito v1git</button>
                </div>
                </div>
                </>

           
  )
}

export default Productoxx
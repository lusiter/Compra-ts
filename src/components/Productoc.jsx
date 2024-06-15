import { useState } from "react"


const Productoc = ({compra}) => {
   
    const [selectOption, setSelectOption]= useState("")

// aplico destructure al archivo json mediante props
    const {id, name, image, description, price, options}= compra

  return (
   
   <>
   <div className="col-md-6 col-lg-4 my-4 row align-items-center">
    <div key={id} className="col-4">
        <img className="img-fluid" 
        src={`./img/${image}.jpg`}
          alt="imagen guitarra" />
        
    </div>
    <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">${price}{" "}Libra</p>
       
         <select className="fw-black text-primary fs-6"
         // cuando hay una selccion ? se ejecuta y la convierte a un JSON y si no es a si manda una cadena : vacia 
        value={selectOption ? JSON.stringify(selectOption) : ''}
         // el evento onChange ejecuta el (e) y toma la seleccion realizada y la covierte en un objeto javascript y luego la amnda al estado para actualizar en setSelectOption
         onChange={(e) => setSelectOption(JSON.parse(e.target.value)) }
         > 
         {/* selectOption es null o diferente se muestra Selecciona esto es una operacion de corto circuito*/}
         {!selectOption && <option value="">Selecciona</option>}
         
         {compra.options.map(opcion => (
            <option key={opcion.id} value={JSON.stringify(opcion)}>
             {opcion.name} - ${opcion.price}Pesos

            </option>
         )) }

         </select>

        <button 
            type="button"
            className="btn btn-dark w-100"
        >Agregar al Carrito</button>
    </div>
</div>


</>
  )
}

export default Productoc
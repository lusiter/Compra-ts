export type Option = {
    id:number
    name: string
    price: number
  }
  
 export type Compra= {
    id: number
    idNew: number
    name: string
    image: string
    description: string
    price: number
    options: Option[];
    //options: { id: number; name: string; price: number }[];
  }

  
 export type CartItem = Compra & {
   option:Option
  quantity: number
}
  
export type CompraID= ['id']
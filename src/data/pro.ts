// product.ts
import type {Compra} from '../types'
export const db : Compra []=[
    {
      id: 1,
      idNew:0,
      name: "Azucar",
      image: "azucar",
      description: "Azucar blanca para cocina",
      price: 2000,
      options: [
        { id: 1, name: "1/2 libra", price: 1000 },
        { id: 2, name: "1 libra", price: 2000 },
        { id: 3, name: "2 libra", price: 4000 }
      ]
    } 
    ,
    {
      "id": 2,
      "idNew":0,
      "name": "Arroz",
      "image": "arroz",
      "description": "Arroz blanco premiun",
      "price": 2000,
      options: [
        { "id": 4, "name": "1/2 libra", "price": 1000 },
        { "id": 5, "name": "1 libra", "price": 2000 }
      ]
    },
    {
      "id": 3,
      "idNew":0,
      "name": "Harina",
      "image": "harina",
      "description": "Harrina nieve",
      "price": 1800,
      "options": [
        { "id": 6, "name": "1/2 libra", "price": 900 },
        { "id": 7, "name": "1 libra", "price": 1800 }
      ]
    },


      {
        "id": 4,
        "idNew": 0,
        "name": "Papa",
        "image": "papa",
        "description": "Papa blanca fresca",
        "price": 1500,
        "options": [
          { "id": 8, "name": "1/2 libra", "price": 750 },
          { "id": 9, "name": "1 libra", "price": 1500 },
          { "id": 10, "name": "2 libras", "price": 3000 }
        ]
      },
      {
        "id": 5,
        "idNew": 0,
        "name": "Cebolla",
        "image": "cebolla",
        "description": "Cebolla blanca fresca",
        "price": 1200,
        "options": [
          { "id": 11, "name": "1/2 libra", "price": 600 },
          { "id": 12, "name": "1 libra", "price": 1200 },
          { "id": 13, "name": "2 libras", "price": 2400 }
        ]
      },
      {
        "id": 6,
        "idNew": 0,
        "name": "Cebollín",
        "image": "cebollin",
        "description": "Cebollín fresco",
        "price": 800,
        "options": [
          { "id": 14, "name": "1/2 Libra", "price": 1100 },
          { "id": 15, "name": "1 Libra", "price": 2200 }
        ]
      },
      {
        "id": 7,
        "idNew": 0,
        "name": "Pimentón",
        "image": "pimenton",
        "description": "Pimentón rojo fresco",
        "price": 1800,
        "options": [
          { "id": 16, "name": "1/2 libra", "price": 900 },
          { "id": 17, "name": "1 libra", "price": 1800 },
          { "id": 18, "name": "2 libra", "price": 3600 }
        ]
      },
      {
        "id": 8,
        "idNew": 0,
        "name": "Zanahoria",
        "image": "zanahoria",
        "description": "Zanahoria fresca",
        "price": 1200,
        "options": [
          { "id": 19, "name": "1/2 libra", "price": 600 },
          { "id": 20, "name": "1 libra", "price": 1200 },
          { "id": 21, "name": "2 libra", "price": 2400 }
        ]
      },
      {
        "id": 9,
        "idNew": 0,
        "name": "Bocadillo",
        "image": "bocadillo",
        "description": "Bocadillo colombiano",
        "price": 1800,
        "options": [{ "id": 22, "name": "250 gramos", "price": 1800 }]
      },
      {
        "id": 10,
        "idNew": 0,
        "name": "Bolsa",
        "image": "bolsa",
        "description": "Bolsa plástica de 3 libras",
        "price": 2100,
        "options": [{ "id": 23, "name": "1 paquete", "price": 2100 }]
      },
      {
        "id": 11,
        "idNew": 0,
        "name": "Ajo",
        "image": "ajo",
        "description": "Ajo fresco",
        "price": 5000,
        "options": [
          { "id": 24, "name": "1/2 libra", "price": 2500 },
          { "id": 25, "name": "1 libra", "price": 5000 },
          { "id": 26, "name": "2 libra", "price": 10000 }
        ]
      },
      {
        "id": 12,
        "idNew": 0,
        "name": "Cilantro",
        "image": "cilantro",
        "description": "Cilantro fresco",
        "price": 6000,
        "options": [
          { "id": 27, "name": "1/2 libra", "price": 3000 },
          { "id": 28, "name": "1 libra", "price": 6000 },
          { "id": 29, "name": "Manojo", "price": 1000 }
        ]
      },
      {
        "id": 13,
        "idNew": 0,
        "name": "Sal",
        "image": "sal",
        "description": "Sal de mesa",
        "price": 1000,
        "options": [
          { "id": 30, "name": "1 libra", "price": 1000 }
          
        ]
      },
      {
        "id": 14,
        "idNew": 0,
        "name": "Azúcar",
        "image": "azucar",
        "description": "Azúcar blanca para cocina",
        "price": 2000,
        "options": [
          { "id": 31, "name": "1/2 libra", "price": 1000 },
          { "id": 32, "name": "1 libra", "price": 2000 },
          { "id": 33, "name": "2 libras", "price": 4000 },
          { "id": 34, "name": "bolsa", "price": 0 }
        ]
      },
      {
        "id": 15,
        "idNew": 0,
        "name": "Aceite",
        "image": "aceite",
        "description": "Aceite vegetal",
        "price": 6400,
        "options": [
          { "id": 35, "name": "1/2 litro", "price": 3200 },
          { "id": 36, "name": "1 litro", "price": 6400 },
          { "id": 37, "name": "2 litro", "price": 12800 }
          
        ]
      },
      {
        "id": 16,
        "idNew": 0,
        "name": "Papel",
        "image": "papel",
        "description": "Papel para fritos",
        "price": 700,
        "options": [{ "id": 38, "name": "1 unidad", "price": 700 }]
      },
      {
        "id": 17,
        "idNew": 0,
        "name": "Huevos",
        "image": "huevos",
        "description": "Huevos frescos",
        "price": 14000,
        "options": [
          { "id": 39, "name": "1 canasta", "price": 7000 },
          { "id": 40, "name": "1/2 canasta", "price": 14000 },
          { "id": 41, "name": "1 unidad", "price": 500 }
        ]
      },
      {
        "id": 18,
        "idNew": 0,
        "name": "Ricostilla",
        "image": "ricostilla",
        "description": "Ricostilla",
        "price": 400,
        "options": [{ "id": 42, "name": "1 unidad", "price": 400 }]
      },
      {
        "id": 19,
        "idNew": 0,
        "name": "Maggi",
        "image": "maggi",
        "description": "Maggi",
        "price": 400,
        "options": [{ "id": 43, "name": "1 unidad", "price": 400 }]
      },
      {
        "id": 20,
        "idNew": 0,
        "name": "Triguisar",
        "image": "triguisar",
        "description": "Triguisar",
        "price": 900,
        "options": [{ "id": 44, "name": "1 unidad", "price": 900 }]
      },
      {
        "id": 21,
        "idNew": 0,
        "name": "Comino",
        "image": "comino",
        "description": "Comino",
        "price": 600,
        "options": [{ "id": 45, "name": "1 unidad", "price": 600 }]
      },
      {
        "id": 22,
        "idNew": 0,
        "name": "Color",
        "image": "color",
        "description": "Color",
        "price": 600,
        "options": [{ "id": 46, "name": "1 unidad", "price": 600 }]
      },
      {
        "id": 23,
        "idNew": 0,
        "name": "Harina Elite",
        "image": "elite",
        "description": "Harina Elite",
        "price": 2200,
        "options": [
                    { "id": 47, "name": "1 libra", "price": 2200 },
                    { "id": 48, "name": "2 libras", "price": 4400 },
                    { "id": 49, "name": "3 libras", "price": 6600 },
                    { "id": 50, "name": "4 libras", "price": 8800 },
                    { "id": 51, "name": "5 libras", "price": 11000 },
                    { "id": 52, "name": "10 libras", "price": 22000 },
                    { "id": 53, "name": "20 libras", "price": 44000 }
      ]
      },
      {
        "id": 24,
        "idNew": 0,
        "name": "Queso Duro",
        "image": "duro",
        "description": "Queso Duro",
        "price": 13000,
        "options": [{ "id": 54, "name": "1/2 libra", "price": 6500 },
                   { "id": 55, "name": "1 libra", "price": 13000 },
                   { "id": 56, "name": "2 libras", "price": 26000 },
                   { "id": 57, "name": "3 libras", "price": 39000 },
                   { "id": 58, "name": "4 libras", "price": 52000 },
                   { "id": 59, "name": "5 libras", "price": 65000 },
                   { "id": 60, "name": "10 libras", "price": 130000 },
                   { "id": 61, "name": "20 libras", "price": 260000 }
      
      ]
      },
      {
        "id": 25,
        "idNew": 0,
        "name": "Queso Blando",
        "image": "queso_blando",
        "description": "Queso Blando",
        "price": 10000,
        "options": [{ "id": 62, "name": "1/2 Libra", "price": 5000 },
                    { "id": 63, "name": "1 Libra", "price": 10000 },
                    { "id": 64, "name": "1-1/2 Libra y media", "price": 15000 },
                    { "id": 65, "name": "2 Libra", "price": 20000 }              
      ]
      },
      {
        "id": 26,
        "idNew": 0,
        "name": "Suero",
        "image": "suero",
        "description": "Suero",
        "price": 1500,
        "options": [{ "id": 66, "name": "1 unidad", "price": 1500 }]
      },
      {
        "id": 27,
        "idNew": 0,
        "name": "Cidra",
        "image": "cidra",
        "description": "Cidra",
        "price": 1500,
        "options": [{ "id": 67, "name": "1/2 libra", "price": 750 },
                    { "id": 68, "name": "1 libra", "price": 1500 }

      ]
      },
      {
        "id": 28,
        "idNew": 0,
        "name": "Naranja",
        "image": "naranja",
        "description": "Naranja",
        "price": 500,
        "options": [{ "id": 69, "name": "1 unidad", "price": 500 }]
      },
      {
        "id": 29,
        "idNew": 0,
        "name": "Mandarina",
        "image": "mandarina",
        "description": "Mandarina",
        "price": 800,
        "options": [{ "id": 70, "name": "1 unidad", "price": 800 }]
      },
      {
        "id": 30,
        "idNew": 0,
        "name": "Banano",
        "image": "banano",
        "description": "Banano",
        "price": 500,
        "options": [{ "id": 71, "name": "1 unidad", "price": 500 }]
      },
      {
        "id": 31,
        "idNew": 0,
        "name": "Yuca",
        "image": "yuca",
        "description": "Yuca",
        "price": 700,
        "options": [{ "id": 72, "name": "1/2 libra", "price": 350 },
                    { "id": 73, "name": "1 libra", "price": 700 } 
      ]
      },
      {
        "id": 32,
        "idNew": 0,
        "name": "Plátano",
        "image": "platano",
        "description": "Plátano",
        "price": 500,
        "options": [{ "id": 74, "name": "1 unidad", "price": 500 }]
      },
      {
        "id": 33,
        "idNew": 0,
        "name": "Auyama",
        "image": "auyama",
        "description": "Auyama",
        "price": 1000,
        "options": [{ "id": 75, "name": "1 libra", "price": 1000 }]
      },
      {
        "id": 34,
        "idNew": 0,
        "name": "Pepino",
        "image": "pepino",
        "description": "Pepino",
        "price": 1200,
        "options": [{ "id": 76, "name": "1/2 libra", "price": 600 },
                     { "id": 77, "name": "1 libra", "price": 1200 }]
      },
      {
        "id": 35,
        "idNew": 0,
        "name": "Tomate",
        "image": "tomate",
        "description": "Tomate",
        "price": 2500,
        "options": [{ "id": 78, "name": "1/2 libra", "price": 1250 },
                    { "id": 79, "name": "1 libra", "price": 2500 } ]
      },
      {
        "id": 36,
        "idNew": 0,
        "name": "Cebolla Blanca",
        "image": "cebolla_blanca",
        "description": "Cebolla Blanca",
        "price": 1800,
        "options": [{ "id": 80, "name": "1/2 libra", "price": 900 },
                    { "id": 81, "name": "1 libra", "price": 1800 }
                     ]
      },
      {
        "id": 37,
        "idNew": 0,
        "name": "Pera",
        "image": "pera",
        "description": "Pera",
        "price": 2000,
        "options": [{ "id": 82, "name": "1 bolsa", "price": 6500 },
                    { "id": 83, "name": "1 unidad", "price": 2000 }
      ]
      },
      {
        "id": 38,
        "idNew": 0,
        "name": "Manzana",
        "image": "manzana",
        "description": "Manzana",
        "price": 2000,
        "options": [{ "id": 84, "name": "1 bolsa", "price": 6000 },
                    { "id": 85, "name": "1 unidad", "price": 2000 }]
      },
      {
        "id": 39,
        "idNew": 0,
        "name": "Cilantro",
        "image": "cilantro",
        "description": "Cilantro",
        "price": 6000,
        "options": [{ "id": 86, "name": "1 manojo", "price": 1000 },
                    { "id": 87, "name": "1/2 libra", "price": 3000 } ]
      },
      {
        "id": 40,
        "idNew": 0,
        "name": "Apio",
        "image": "apio",
        "description": "Apio",
        "price": 2000,
        "options": [{ "id": 88, "name": "1/2 libra", "price": 1000 }]
      },
      {
        "id": 41,
        "idNew": 0,
        "name": "Fresa",
        "image": "fresa",
        "description": "Fresa",
        "price": 5000,
        "options": [{ "id": 89, "name": "1 unidad", "price": 5000 }]
      },
      {
        "id": 42,
        "idNew": 0,
        "name": "Carne de Res Relajada",
        "image": "carne_res_relajada",
        "description": "Carne de Res Relajada",
        "price": 16500,
        "options": [{ "id": 90, "name": "1/2 libra", "price": 8250 },
                    { "id": 91, "name": "1 libra", "price": 16500 },
                    { "id": 92, "name": "ingresa valor", "price": 0 }]
      },
      {
        "id": 43,
        "idNew": 0,
        "name": "Cerdo Magro",
        "image": "cerdo_magro",
        "description": "Cerdo Magro",
        "price": 12000,
        "options": [{ "id": 93, "name": "1 libra", "price": 12000 },
                    { "id": 94, "name": "2 libra", "price": 24000 },
                    { "id": 95, "name": "ingresa valor", "price": 0 }
      ]
      },
      {
        "id": 44,
        "idNew": 0,
        "name": "Chuleta",
        "image": "chuleta",
        "description": "Chuleta",
        "price": 11000,
        "options": [{ "id": 96, "name": "1 libra", "price": 11000 },
                       { "id": 97, "name": "2 libra", "price": 22000 },
                       { "id": 98, "name": "ingresa valor", "price": 0 } 
      ]
      },
      {
        "id": 45,
        "idNew": 0,
        "name": "Carne de Res para Desmechar",
        "image": "desmechar",
        "description": "Carne de Res para Desmechar",
        "price": 15000,
        "options": [{ "id": 99, "name": "1 libra", "price": 15000 },
                      { "id": 100, "name": "2 libra", "price": 30000 },
                      { "id": 101, "name": "ingresa valor", "price": 0 }]
      },
      {
        "id": 46,
        "idNew": 0,
        "name": "Hueso",
        "image": "hueso",
        "description": "Hueso",
        "price": 9000,
        "options": [{ "id": 102, "name": "1 libra", "price": 9000 },
                     { "id": 103, "name": "2 libra", "price": 18000 },
                     { "id": 104, "name": "1/2 libra", "price": 4500 }]
      },
      {
        "id": 47,
        "idNew": 0,
        "name": "Chorizo de Cerdo",
        "image": "chorizo_cerdo",
        "description": "Chorizo de Cerdo",
        "price": 2000,
        "options": [{ "id": 105, "name": "1 unidad", "price": 2000 }]
      },
      {
        "id": 48,
        "idNew": 0,
        "name": "Chorizo de Res",
        "image": "chorizo_res",
        "description": "Chorizo de Res",
        "price": 800,
        "options": [{ "id": 106, "name": "1 unidad", "price": 800 }]
      },
      {
        "id": 49,
        "idNew": 0,
        "name": "Hígado",
        "image": "higado",
        "description": "Hígado",
        "price": 12000,
        "options": [{ "id": 107, "name": "1/2 libra", "price": 6000 },
                     { "id": 108, "name": "1 libra", "price": 12000 },
                     { "id": 109, "name": "2 libra", "price": 24000 } ]
      },
      {
        "id": 50,
        "idNew": 0,
        "name": "Mondongo",
        "image": "mondongo",
        "description": "Mondongo",
        "price": 10000,
        "options": [{ "id": 110, "name": "1 libra", "price": 10000 },
               { "id": 111, "name": "Ingresa valor", "price": 0 }]
      },
      {
        "id": 51,
        "idNew": 0,
        "name": "Pollo Semicriollo",
        "image": "pollo_semicriollo",
        "description": "Pollo Semicriollo",
        "price": 4500,
        "options": [{ "id": 112, "name": "1/2 libra", "price": 2250 },
                    { "id": 113, "name": "1 libra", "price": 4500 }
      ]
      },
      {
        "id": 52,
        "idNew": 0,
        "name": "Salsa Soya",
        "image": "salsa_soya",
        "description": "Salsa Soya",
        "price": 9600,
        "options": [{ "id": 114, "name": "1 unidad", "price": 9600 }]
      },
      {
        "id": 53,
        "idNew": 0,
        "name": "Mostaza",
        "image": "mostaza",
        "description": "Mostaza",
        "price": 9000,
        "options": [{ "id": 115, "name": "1 unidad de 1000 g", "price": 9000 }]
      },
      {
        "id": 54,
        "idNew": 0,
        "name": "Caja de Manzanilla",
        "image": "manzanilla",
        "description": "Caja de Manzanilla",
        "price": 5000,
        "options": [{ "id": 116, "name": "1 caja 20 U", "price": 5000 }]
      },
      {
        "id": 55,
        "idNew": 0,
        "name": "Capuchino",
        "image": "capuchino",
        "description": "Capuchino",
        "price": 900,
        "options": [{ "id": 117, "name": "1 sobre", "price": 900 }]
      },
      {
        "id": 56,
        "idNew": 0,
        "name": "Brillo Brio",
        "image": "brillo_brio",
        "description": "Brillo Brio",
        "price": 1300,
        "options": [{ "id": 118, "name": "1 unidad", "price": 1300 }]
      },
      {
        "id": 57,
        "idNew": 0,
        "name": "Colada de Arroz",
        "image": "crema_arroz",
        "description": "Colada de Arroz",
        "price": 900,
        "options": [{ "id": 119, "name": "1 unidad", "price": 900 }]
      },
      {
        "id": 58,
        "idNew": 0,
        "name": "Citronela",
        "image": "citronela",
        "description": "Citronela",
        "price": 12600,
        "options": [{ "id": 120, "name": "1 unidad", "price": 12600 }]
      },
      
        {
          "id": 59,
          "idNew": 0,
          "name": "Pescado",
          "image": "pescado",
          "description": "Pesacado fresco",
          "price": 5000,
          "options": [
            { "id": 121, "name": "1 unidad", "price": 3500 },
            { "id": 122, "name": "2 unidades", "price": 7000 },
            { "id": 123, "name": "3 unidades", "price": 10000 }
          ]
        },
        {
          "id": 60,
          "idNew": 0,
          "name": "Jamón",
          "image": "jamon",
          "description": "Jamón 400 gramos",
          "price": 8000,
          "options": [{ "id": 124, "name": "1 jamon 400g", "price": 8000 }]
        },
        {
          "id": 61,
          "idNew": 0,
          "name": "Salchichón",
          "image": "salchichon",
          "description": "Salchichón 500 gramos",
          "price": 5200,
          "options": [{ "id": 125, "name": "Salchichón", "price": 5200 }]
        },
        {
          "id": 62,
          "idNew": 0,
          "name": "Pollo Congelado",
          "image": "pollo_congelado",
          "description": "Pollo congelado precio 4500 la libra",
          "price": 4500,
          "options": [{ "id": 126, "name": "1 libra", "price": 4500 },
                       { "id": 127, "name": "2 libra", "price": 9000 },
                       { "id": 128, "name": "3 libra", "price": 13500 }]
        },
        {
          "id": 63,
          "idNew": 0,
          "name": "Pechuga Congelada",
          "image": "pechuga_congelada",
          "description": "Pechuga congelada ",
          "price": 7500,
          "options": [{ "id": 129, "name": "1 libra", "price": 7500 },
                      { "id": 130, "name": "2 libra", "price": 15000 }]
        },
        {
          "id": 64,
          "idNew": 0,
          "name": "Muslos de Pollo",
          "image": "muslos_pollo",
          "description": "Muslos de pollo",
          "price": 5000,
          "options": [{ "id": 131, "name": "1 libra", "price": 500 },
                      { "id": 132, "name": "2 libra", "price": 10000 }]
        },
        {
          "id": 65,
          "idNew": 0,
          "name": "Carne de Cerdo Molida",
          "image": "carne_cerdo",
          "description": "Carne de cerdo molida",
          "price": 10000,
          "options": [{ "id": 133, "name": "1 libra", "price": 10000 },
                      { "id": 134, "name": "2 libra", "price": 20000 }]
        },
        {
          "id": 66,
          "idNew": 0,
          "name": "Carne de Res Molida",
          "image": "carne_res",
          "description": "Carne de res molida",
          "price": 14000,
          "options": [{ "id": 135, "name": "1 libra", "price": 14000 },
                      { "id": 136, "name": "2 libra", "price": 28000 }]
        },
        {
          "id": 67,
          "idNew": 0,
          "name": "Pechuga Descongelada",
          "image": "pechuga_descongelada",
          "description": "Pechuga descongelada",
          "price": 8500,
          "options": [{ "id": 137, "name": "1 libra", "price": 8500 },
                      { "id": 138, "name": "2 libra", "price": 17000 }]
        },
        {
          "id": 68,
          "idNew": 0,
          "name": "Servilleta",
          "image": "servilleta",
          "description": "Servilleta unidad",
          "price": 2200,
          "options": [{ "id": 139, "name": "1 unidad", "price": 2200 },
                      { "id": 140, "name": "2 unidades", "price": 4400 }]
        },
        {
          "id": 69,
          "idNew": 0,
          "name": "Rollo de Servilleta",
          "image": "rollo_servilleta",
          "description": "Rollo de servilleta unidad",
          "price": 16500,
          "options": [{ "id": 141, "name": "1 unidad", "price": 16500 },
                      { "id": 142, "name": "2 unidades", "price": 33000 }]
        },
        {
          "id": 70,
          "idNew": 0,
          "name": "Colada San Jorge",
          "image": "colada_sanjorge",
          "description": "Colada San Jorge unidad",
          "price": 900,
          "options": [{ "id": 143, "name": "1 unidad", "price": 900 },
                      { "id": 144, "name": "2 unidades", "price": 1800 }]
        },
        {
          "id": 71,
          "idNew": 0,
          "name": "Colada Maizena",
          "image": "colada_maizena",
          "description": "Colada Maizena unidad",
          "price": 1600,
          "options": [{ "id": 145, "name": "1 unidad", "price": 1600 },
                      { "id": 146, "name": "2 unidades", "price": 3200 }]
        },
        {
          "id": 72,
          "idNew": 0,
          "name": "Paños Buubu",
          "image": "pañales",
          "description": "Paños Buubu 3 etapa y 4 etapa precio de 17500",
          "price": 17500,
          "options": [{ "id": 147, "name": "3 etapa", "price": 17500 },
                   { "id": 148, "name": "4 etapa", "price": 20000 }]
        },
        {
          "id": 73,
          "idNew": 0,
          "name": "Yodora Tarrito",
          "image": "yodora",
          "description": "Yodora Tarrito precio de 9000",
          "price": 9000,
          "options": [{ "id": 149, "name": "1 unidad", "price": 9000 },
                      { "id": 150, "name": "2 unidades", "price": 18000 }]
        },
        {
          "id": 74,
          "idNew": 0,
          "name": "Coca-Cola Zero",
          "image": "coca_cola",
          "description": "Coca-Cola Zero precio 2250",
          "price": 2250,
          "options": [{ "id": 151, "name": "1 unidad", "price": 2250 },
                      { "id": 152, "name": "2 unidades", "price": 4500 }]
        },
        {
          "id": 75,
          "idNew": 0,
          "name": "Aceite Sonelo",
          "image": "aceite_sonelo",
          "description": "Aceite de 2 y 3 litros Sonelo",
          "price": 19500,
          "options": [{ "id": 153, "name": "900 ml", "price": 7000 },
                      { "id": 154, "name": "2 litros", "price": 14500 },
                    { "id": 155, "name": "3 litros", "price": 19500 },
                      { "id": 156, "name": "3 litros", "price": 20000 }]
        },
        {
          "id": 76,
          "idNew": 0,
          "name": "Pañitos Humedos",
          "image": "pañitos",
          "description": "Pañitos Humedos Bubu",
          "price": 4500,
          "options": [{ "id": 157, "name": "1 pañitos amarrillos", "price": 4600 },
                      { "id": 158, "name": "1 pañitos sensitive", "price": 7500 }
                    ]
        },
        {
          "id": 77,
          "idNew": 0,
          "name": "colmaiz",
          "image": "colmaiz",
          "description": "colmaiz para buñuelos",
          "price": 4200,
          "options": [{ "id": 159 ,"name": "1 libra", "price": 4200 },
                      { "id": 160, "name": "2 libras", "price": 8400 },
                    { "id": 161, "name": "3 libras", "price": 12600 },
                      { "id": 162, "name": "5 libras", "price": 21000 }]
        },
        {
          "id": 78,
          "idNew": 0,
          "name": "Vitina",
          "image": "vitina",
          "description": "Grasa para empanadas",
          "price": 6000,
          "options": [{ "id": 163, "name": "1 libra", "price": 6000 },
                      { "id": 164, "name": "2 libras", "price": 12000 },
                    { "id": 165, "name": "3 libras", "price": 18000 },
                      { "id": 166, "name": "5 libras", "price": 30000 }]
        },
        {
          "id": 79,
          "idNew": 0,
          "name": "Piña",
          "image": "piña",
          "description": "Piña en trocito o glasse",
          "price": 12000,
          "options": [{ "id": 149, "name": "1 unidad", "price": 12000 },
                      { "id": 150, "name": "2 unidades", "price": 24000 }]
        }
      
  
  ]
  
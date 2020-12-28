import React,{ createContext, useState, useEffect } from "react";
import axios from 'axios'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {

    const [dataUser, setDataUser] = useState({
        "id": 0,
        "admin": 0,
        "email": "", 
        "token": ""
    })

    const [products, setProducts] = useState([])


    const GetProducts = () => {

        axios.get('http://localhost:4000/product')
        .then((productos) => {
            setProducts(productos.data)
            
        })
        .catch((err) => {
            console.log(err)
        })

    }



    useEffect(() => {
        GetProducts()
       
    }, [products])

     
  return(
      <DataContext.Provider value={{
  
        dataUser,
        products,
        setDataUser

        
      }}>
          {children}
      </DataContext.Provider>
  )
}
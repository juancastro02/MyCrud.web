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

    let mensaje;

    const GetProducts = () => {

        axios.get('http://localhost:4000/product')
        .then((productos) => {
            setProducts(productos.data)
            
        })
        .catch((err) => {
            console.log(err)
        })

    }

    const LoginUser = (datos) => {

        axios.post('http://localhost:4000/user/login', datos)
        .then((user) => {
             
            localStorage.setItem("token", user.data.token)
            setDataUser({
                "id": user.data.id,
                "admin": user.data.admin,
                "email": user.data.email,
                "token": user.data.token
            })
            console.log(dataUser)
        })
        .catch((err) => {
            console.log(err.response.data.error ? err.response.data.error : err.response.data.message)
        })

    } 

    const RegisterUser = (datos) => {

        axios.post('http://localhost:4000/user/create', datos)
        .then((user) => {
           mensaje =  user.data.message
           console.log(mensaje)
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
        LoginUser,
        dataUser,
        RegisterUser,
        products
        
      }}>
          {children}
      </DataContext.Provider>
  )
}
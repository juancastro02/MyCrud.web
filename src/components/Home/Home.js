import React,{useContext} from 'react'
import { DataContext } from '../../context/DataContext'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {

    const {  products  } = useContext( DataContext )
    

    return (
      <div className='backgroung ' >
        <div className='home ' >
      {  products[0] && products.map((p) => (
        <Link to={`/product/${p.id}` } style={{textDecoration: "none"}} >
          <div class="card product" style={{width: "15rem", height: "23rem"}} >
          <img class="card-img-top" src={p.imagen} alt='..' style={{height: "14rem"}}/>
          <div class="card-body">
      <h5 className="card-text fondo" >{p.nombre}</h5>
      <p className="card-text textoChico" >{ p.descripcion.slice(0, 15) + '...' }</p>
      <h5 className="card-text precio" >{p.tipo_moneda + " " +p.valor}</h5>
<div className='iconos' >

 {
   p.categoria === 'Fruta' ? <div className='Fruta' >
   <img style={{width: "25px", heigth: "20px", paddingTop: "6px" }} alt='Fruta' src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MDYuNTM3IDUwNi41MzciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTA2LjUzNyA1MDYuNTM3IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxwYXRoIGQ9Im0xMjYuODA1IDE2OC45MzdjLTYuOTU2IDAtMTMuOTE3LjU1Ny0yMC42ODggMS42NTUtNC4wODkuNjYzLTYuODY2IDQuNTE1LTYuMjAzIDguNjA0LjY2MiA0LjA4OCA0LjUxMiA2Ljg2OCA4LjYwNCA2LjIwMyA1Ljk4LS45NyAxMi4xMzQtMS40NjEgMTguMjg4LTEuNDYxaDU2LjY0OWMzMS45MzcgMCA2MS4yODQgMTIuOTcyIDgyLjYzOCAzNi41MjUgMjEuMjU5IDIzLjQ0OSAzMS43MDEgNTQuNzE4IDI4LjY0OSA4NS43ODgtLjQwNSA0LjEyMiAyLjYwOCA3Ljc5MiA2LjczIDguMTk3LjI1LjAyNS40OTcuMDM3Ljc0Mi4wMzcgMy44MTIgMCA3LjA3NS0yLjg5NSA3LjQ1NS02Ljc2OCAzLjQ2NS0zNS4yNzQtOC4zNjgtNzAuNzUtMzIuNDY0LTk3LjMyOS0yNC4yMzMtMjYuNzI5LTU3LjUyNy00MS40NS05My43NTEtNDEuNDVoLTU2LjY0OXoiLz48cGF0aCBkPSJtMjEwLjc0NCA0NTAuNjVjLTEwLjExNCAxLjgzNC0yMC43MTEuOTQ0LTMwLjY1NS0yLjU3Ny00LjE4Mi0xLjQ3NC04LjU0OS0yLjU5LTEyLjk4Ny0zLjMxOS0zLjktLjYzNi03LjkyNy0uOTU4LTExLjk2Ni0uOTU4LTguNTMgMC0xNi45MjggMS40MzktMjQuOTUzIDQuMjc2LTQuODIzIDEuNy05Ljc4OCAyLjc5NS0xNC43NTcgMy4yNTUtMTAuMTYuOTQtMjAuMjg5LS43NDgtMjkuMjkzLTQuODc4LTE4LjI0Ni04LjM3LTMyLjA1Mi0yMy4zNjktMzguODc0LTQyLjIzMWwtMjUuNTA5LTcwLjYwN2MwLS4wMDEtLjAwMS0uMDAyLS4wMDEtLjAwMy0xMC4xNjUtMjguMTMxLTguNzk2LTU4LjQyNyAzLjg1NC04NS4zMDkgMTIuMzQyLTI2LjIyNiAzMy44MjUtNDYuMzk2IDYwLjQ5NS01Ni43OTQgMy44NTktMS41MDUgNS43NjgtNS44NTMgNC4yNjMtOS43MTJzLTUuODUzLTUuNzY3LTkuNzEyLTQuMjYzYy0zMC4yNjUgMTEuOC01NC42MzQgMzQuNjY1LTY4LjYxOCA2NC4zODMtMTQuMzU4IDMwLjUxMy0xNS45MTcgNjQuODg4LTQuMzg5IDk2Ljc5MyAwIDAgLjAwMS4wMDEuMDAxLjAwMmwyNS41MSA3MC42MWM4LjIwMSAyMi42NzcgMjQuNzk2IDQwLjcwNiA0Ni43MjcgNTAuNzY2IDkuMzUgNC4yODkgMTkuNjI5IDYuNDk3IDMwLjA3OSA2LjQ5NyAyLjI3NyAwIDQuNTYzLS4xMDUgNi44NDktLjMxNiA2LjE5OC0uNTc0IDEyLjM3Ni0xLjkzNSAxOC4zNjktNC4wNDcgNi40MjItMi4yNzEgMTMuMTM4LTMuNDIxIDE5Ljk2LTMuNDIxIDMuMjMzIDAgNi40NDguMjU3IDkuNTQ1Ljc2MSAzLjU2Mi41ODUgNy4wNjkgMS40OCAxMC40MTEgMi42NTkgMTIuMzkyIDQuMzg5IDI1LjY0NiA1LjQ5NCAzOC4zMyAzLjE5MiA0LjA3NS0uNzM5IDYuNzgtNC42NDIgNi4wNDEtOC43MTgtLjc0MS00LjA3Ni00LjY0LTYuNzgzLTguNzItNi4wNDF6Ii8+PHBhdGggZD0ibTE0Ny44MzUgMTM3Ljg0OGMtLjEyOCAxLjg0My0uMTk5IDMuNjk1LS4xOTkgNS41NTh2OC4wM2MwIDQuMTQyIDMuMzU3IDcuNSA3LjUgNy41czcuNS0zLjM1OCA3LjUtNy41di04LjAzYzAtMjEuNjI2IDEwLjcxMy00MS43NzQgMjguNjU4LTUzLjg5NiAzLjQzMy0yLjMxOCA0LjMzNS02Ljk4IDIuMDE3LTEwLjQxMy0yLjMxOC0zLjQzMi02Ljk3OS00LjMzNi0xMC40MTMtMi4wMTctMTAuMzUzIDYuOTkzLTE4Ljc0OSAxNi4xNTgtMjQuNzQ4IDI2LjY2NS00LjI5NC0xMy45MDYtMTEuOTI4LTI2LjY0OS0yMi41MTEtMzcuMjMzLTE3LjEyNi0xNy4xMjUtMzkuODkyLTI2LjU1Ni02NC4xMDQtMjYuNTU2LTQuMTQzIDAtNy41IDMuMzU4LTcuNSA3LjUgMCA0Ny42NzkgMzcuMDAzIDg2Ljg3OCA4My44IDkwLjM5MnptLTIyLjgwMy02MC43MjljMTIuNDA1IDEyLjQwNiAxOS45NzEgMjguMzYxIDIxLjc0NyA0NS41NzctMzUuNDEzLTMuNjkyLTYzLjYzOC0zMS45MjEtNjcuMzM0LTY3LjMzMyAxNy4yMTcgMS43NzcgMzMuMTc2IDkuMzQ1IDQ1LjU4NyAyMS43NTZ6Ii8+PHBhdGggZD0ibTQ4Ny4wOTggMjUwLjgzMmMtMTMuMzM3LTUuNi0yNy44OTYtMS45NTUtMzcuMDkgOS4yODktNC4wMTcgNC45MTQtOC4zNDMgOS42OTQtMTIuODU4IDE0LjIwOS0zNS43MSAzNS43MTUtODMuMjI2IDU1LjM4NS0xMzMuNzk0IDU1LjM4NS01MC41NjYgMC05OC4wODMtMTkuNjY3LTEzMy43OTQtNTUuMzc4LTQuNTMxLTQuNTMyLTguODU1LTkuMzE1LTEyLjg1OC0xNC4yMjEtOS4xODktMTEuMjQyLTIzLjc0Mi0xNC44ODYtMzcuMDgxLTkuMjg2LTEzLjI2NiA1LjU3LTIwLjgxNCAxOC40NDItMTkuMjMxIDMyLjc5NS44OTQgOC4wNzYgMi4yODMgMTYuMTc3IDQuMTI4IDI0LjA3NSA4LjYyNyAzNi45ODMgMjcuNDUzIDcwLjc5OCA1NC40NDIgOTcuNzg4IDM1LjU1NyAzNS41NTcgODIuNjMzIDU2LjczNCAxMzIuNTU3IDU5LjYzIDMuOTU2LjIyOSA3LjkwMy4zNDMgMTEuODQ2LjM0MyA0NS4zOTYgMCA4OS41NS0xNS4xMzEgMTI1LjQ2LTQzLjIwOCAzLjI2My0yLjU1MSAzLjg0LTcuMjY1IDEuMjg4LTEwLjUyOC0yLjU1MS0zLjI2My03LjI2My0zLjgzOS0xMC41MjgtMS4yODktMzYuMTUxIDI4LjI2Ny04MS4zMjYgNDIuMzY4LTEyNy4xOTcgMzkuNzA3LTQ2LjI0Ny0yLjY4My04OS44NjUtMjIuMzA5LTEyMi44MTctNTUuMjYyLTIzLjYxMy0yMy42MTItNDAuNDctNTIuODU5LTQ5LjAwNS04NC44ODVsNDIuMjkzLTIxLjI1OGMzOC4wNzEgMzYuMTM4IDg3Ljc0NyA1NS45NzcgMTQwLjUgNTUuOTc3IDU0LjU3NiAwIDEwNS44NTgtMjEuMjMgMTQ0LjQwMS01OS43NzkgMy4wNzEtMy4wNzEgNi4wNDctNi4yNjUgOC45MjQtOS41MjhsMzEuNDUgMjYuNTExYy03Ljc0MiAzNS4yMjItMjUuMzA1IDY3LjI4Ni01MC45ODIgOTIuOTYyLTIuOTI5IDIuOTI5LTIuOTI5IDcuNjc4IDAgMTAuNjA2czcuNjc3IDIuOTMgMTAuNjA3IDBjMjguODMxLTI4LjgzMiA0OC4xOTMtNjUuMTMxIDU1Ljk5Mi0xMDQuOTc3IDEuMDk1LTUuNTkzIDEuOTYzLTExLjI3NyAyLjU3OS0xNi44ODkgMS41ODEtMTQuMzQ5LTUuOTY3LTI3LjIxOS0xOS4yMzItMzIuNzg5em0tMzYxLjY2OCAxMy44MjhjNS42MTktMi4zNTkgMTMuNzM1LTIuMjk5IDE5LjY1NSA0Ljk0MyAyLjE3MyAyLjY2NSA0LjQzNyA1LjI5NSA2Ljc3MiA3Ljg3NmwtMzQuNjU2IDE3LjQyYy0uNzc2LTQuMjktMS40MjMtOC42MDgtMS45LTEyLjkyMS0xLjAxNi05LjIwNyA0LjU2Ni0xNC45ODIgMTAuMTI5LTE3LjMxOHptMzU1Ljg2MS4wMDJjNS41NjIgMi4zMzYgMTEuMTQ0IDguMTExIDEwLjEyOCAxNy4zMTktLjEwMy45MzMtLjIyMSAxLjg2OS0uMzM4IDIuODA1bC0yMy42MDctMTkuOWM0Ljc2LTIuMzMgOS44OTUtMS44NyAxMy44MTctLjIyNHoiLz48cGF0aCBkPSJtNDU5LjE1OCAzMzcuNzk3YzIuNjgxLTMuMTU4IDIuMjkzLTcuODkxLS44NjQtMTAuNTcxcy03Ljg5MS0yLjI5Mi0xMC41NzEuODY1Yy0zLjM2OCAzLjk2OC02LjkyNiA3LjgzLTEwLjU3MiAxMS40NzYtMzUuODM4IDM1LjgzOC04My4zNTMgNTUuNTc1LTEzMy43OTEgNTUuNTc0LTUwLjQzOSAwLTk3Ljk1Ni0xOS43NC0xMzMuNzk3LTU1LjU4MS01LjI5NS01LjI5NS0xMC4zMjEtMTAuOTQ3LTE0Ljk0LTE2Ljc5OC0yLjU2NS0zLjI1Mi03LjI4Mi0zLjgwNy0xMC41MzMtMS4yNDEtMy4yNTIgMi41NjYtMy44MDcgNy4yODItMS4yNCAxMC41MzQgNC45NzkgNi4zMSAxMC4zOTggMTIuNDAzIDE2LjEwNiAxOC4xMTIgMzguNjc1IDM4LjY3NCA4OS45NTggNTkuOTc0IDE0NC40MDQgNTkuOTc0aC4wMDNjNTQuNDQxIDAgMTA1LjcyNi0yMS4yOTggMTQ0LjM5Ni01OS45NjggMy45MzItMy45MzMgNy43NjgtOC4wOTcgMTEuMzk5LTEyLjM3NnoiLz48L2c+PC9zdmc+" />
        </div> : null
 }

 {
   p.categoria === 'Verdura' ?  <div className='Verdura' >
   <img style={{ width: "25px", heigth: "20px", paddingTop: "6px" }} alt='Verdura' src="data:image/png;base64,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" />
       </div> : null
 }

  </div>   

          </div>
          </div>
          </Link> )) 
      } 
        </div>
        </div>
    )
}

export default Home
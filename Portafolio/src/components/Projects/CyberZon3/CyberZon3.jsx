import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './CyberZon3.module.css'
import IMAGE from '../../../assets/Untitled Project.jpg'

const CyberZon3 = () => {
  return (
    <div className={style.container__cyberzone}>
      
      <div className={style.container__left}>
        <img className={style.container__image} src={IMAGE} alt="cyberzone" />
      </div>



      <div className={style.container__rigth}>
        <h1 className={style.tittle}>CyberZon3</h1>
        <p className={style.parrafo}>
          Cyberzon3 es un E-commerce 100% funcional sobre ventas de computadoras con 
          filtros, ordenamientos, detalles, lista de favoritos, pasarela de pagos, autenticacion,
          dashboard de administrador etc.
          
        </p>
       <NavLink target={'_blank'} to={'./details'}> <button className={style.btn}>Ver Proyecto</button></NavLink>
      </div>
      
      </div>
  )
}

export default CyberZon3
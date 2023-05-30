import React from 'react'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={style.container__navbar}>
        
       <div className={style.position}>
       <p>Home</p>
       <p>Acerca de mi</p>
       <p>Proyectos</p>
       </div>

    </div>
  )
}

export default Navbar
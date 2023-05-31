import React from 'react'
import style from './Navbar.module.css'


const Navbar = () => {
  return (
    <div className={style.container__navbar}>

      <div className={style.position}>
        
        <div><button><a href="#home">Home</a></button></div>
        <div><button><a href="#aboutme">Acerca de mi</a></button></div>

        <div><button><a href="#projects">projects</a></button></div>

      </div>

    </div>
  )
}

export default Navbar
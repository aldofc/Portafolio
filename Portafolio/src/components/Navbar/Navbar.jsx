import React from 'react'
import style from './Navbar.module.css'


const Navbar = () => {
  return (
    <div className={style.container__navbar}>

      <div className={style.position}>
        
        <div><button className={style.button}><a href="#home"><p className={style.titles}>Home</p></a></button></div>
        <div><button className={style.button}><a href="#aboutme"><p className={style.titles}>Acerca de mi</p></a></button></div>

        <div><button className={style.button}><a href="#projects"><p className={style.titles}>projects</p></a></button></div>

      </div>

    </div>
  )
}

export default Navbar
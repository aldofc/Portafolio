import React from 'react'
import style from './Navbar.module.css'


const Navbar = () => {
  return (
    <div className={style.container__navbar}>

      <div className={style.position}>
        
        <div><button className={style.button}><a className={style.text} href="#home"><p className={style.titles}>Home</p></a></button></div>
        <div><button className={style.button}><a className={style.text} href="#aboutme"><p className={style.titles}>Acerca de mi</p></a></button></div>

        <div><button className={style.button}><a className={style.text} href="#projects"><p className={style.titles}>Proyectos</p></a></button></div>

      </div>

    </div>
  )
}

export default Navbar
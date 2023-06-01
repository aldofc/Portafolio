import React from 'react'
import SocialButtons from '../../SocialButtons/SocialButtons'
import style from './Part1.module.css'

const Part1 = () => {
  return (
    <div className={style.container__part1} id='home'>
      <br></br><br></br> <br></br><br></br> <br></br><br></br>
      <p className={style.tittle}>HOLA, SOY ALDO FLORES</p>
      <p className={style.parrafo}>Un desarrollador web enfocado en frontend que construye el frontend de sitios web y aplicaciones web que
        conducen al éxito del producto en general.</p>


      <div className={style.button__projects}><button ><a href="#projects">Proyectos</a></button></div>

      <div className={style.social__buttons}><SocialButtons /></div>

      <div className={style.animation}>
      <button className={style.button__scroll}>
        <div className={style.scroll}> </div>
       </button>
      <p>Scroll</p>
      </div>{/* div scroll */}
      
    </div>
  )
}

export default Part1
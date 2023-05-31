import React from 'react'
import SocialButtons from '../../SocialButtons/SocialButtons'
import style from './Part1.module.css'

const Part1 = () => {
  return (
    <div className={style.container__part1} id='home'>
      <p className={style.tittle}>HOLA, SOY ALDO FLORES</p>
      <p>Un desarrollador web enfocado en frontend que construye el frontend de sitios web y aplicaciones web que
        conducen al éxito del producto en general.</p>
      <button>Proyectos</button>

      <SocialButtons />

      <div>
      <button className={style.button__scroll}>
        <div className={style.scroll}> </div>
       </button>
      <p>Scroll</p>
      </div>{/* div scroll */}
      
    </div>
  )
}

export default Part1
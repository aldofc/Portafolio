import React from 'react'
import SocialButtons from '../../SocialButtons/SocialButtons'
import style from './Part1.module.css'

const Part1 = () => {
  return (
    <div className={style.container__part1} id='home'>
      <div className={style.none__space}><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></div>
      <div className={style.yes__space}><br></br><br></br><br></br><br></br><br></br></div>
      <div className={style.yes1__space}><br></br><br></br><br></br><br></br><br></br><br></br></div>
      <div className={style.yes2__space}><br></br><br></br><br></br></div>
      <div className={style.center__title}><p className={style.tittle}>HOLA, SOY ALDO FLORES</p></div>

      <div className={style.container__parrafo}>
        <p className={style.parrafo}>Un desarrollador web enfocado en frontend que construye el frontend de sitios web y  </p>
        <p className={style.parrafo}>aplicaciones web que conducen al éxito del producto en general.</p>

      </div>

      <div className={style.container__social}>
        <div className={style.social__buttons}><SocialButtons /></div>
      </div>

      <div className={style.button__projects}>
        <button className={style.btn}>
          <a className={style.proyectosbutton} href="#projects" >Proyectos</a></button>
      </div>

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
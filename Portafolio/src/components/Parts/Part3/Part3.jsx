import React from 'react'
import CyberZon3 from '../../Projects/CyberZon3/CyberZon3'
import style from './Part3.module.css'

const Part3 = () => {
  return (

    <div className={style.container__page} id='projects'>
      <br></br><br></br> <br></br><br></br> <br></br><br></br>
      <div>
      <p className={style.tittle}>Proyectos</p>
      <div className={style.container__parrafo}><p className={style.parrafo}>Aquí encontrarás algunos de los proyectos personales y de clientes
        que creé con cada proyecto que contiene su propio caso de estudio.</p></div>
      </div>
      <CyberZon3 />
    </div>

  )
}

export default Part3
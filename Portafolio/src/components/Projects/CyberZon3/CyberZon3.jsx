import React from 'react'
import style from './CyberZon3.module.css'
import IMAGE from '../../../assets/Untitled Project.jpg'

const CyberZon3 = () => {
  return (
    <div className={style.container__cyberzone}>
      
      <div className={style.container__left}>
        <img className={style.container__image} src={IMAGE} alt="cyberzone" />
      </div>



      <div className={style.container__rigth}>
        <h1>CyberZon3</h1>
        <p className={style.parrafo}>parrafo sobre suberzonellllllllllllllllllllllllllllll
          llllllllllllllajbdjkahdajdhakdhajkdh
          
        </p>
        <button className={style.btn}>Ver Proyecto</button>
      </div>
      
      </div>
  )
}

export default CyberZon3
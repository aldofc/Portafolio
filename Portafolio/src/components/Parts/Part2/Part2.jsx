import React from 'react'
import style from './Part2.module.css'

const Part2 = () => {
  return (
    <div className={style.container__page} id='aboutme'>
      <br></br><br></br> <br></br><br></br> <br></br><br></br>
      <p className={style.tittle}>Acerca de mi</p>
      <p className={style.parrafo}>Aquí encontrarás más información sobre mí, lo que hago y mis habilidades actuales,</p>
      <p className={style.parrafo}>principalmente en términos de programación y tecnología.</p>


      <div className={style.position}>
     <div className={style.conoceme}>
     <h1 className={style.conoceme__tittle}>¡¡Conoceme!!</h1>
      <p className={style.parrafo__conoceme}>Soy un desarrollador web frontend que crea el front-end de sitios web y aplicaciones web que
        conducen al éxito del producto en general. Echa un vistazo a algunos de mis trabajos en la sección Proyectos.
        También me gusta compartir contenido relacionado con lo que he aprendido a lo largo de los años en desarrollo web
        para que pueda ayudar a otras personas de la comunidad de desarrolladores. Siéntase libre de conectarse o seguirme
        en mi Linkedin donde publico contenido útil relacionado con el desarrollo y la programación web
        Estoy abierto a oportunidades de trabajo donde pueda contribuir, aprender y crecer.
        Si tiene una buena oportunidad que coincida con mis habilidades y experiencia, no dude en ponerse en contacto conmigo.</p>
        <button className={style.btn}>Contactame</button>
     </div>


     

      <div className={style.skills}>
      <h1 className={style.habilidades__tittle}>Mis habilidades</h1>
      


<div className={style.position__row}>
<p className={style.skills__box}>HTML</p>
<p className={style.skills__box}> CSS</p>
<p className={style.skills__box}>JavaScript</p>
<p className={style.skills__box}>React</p>
<p className={style.skills__box}> Redux</p>
<p className={style.skills__box}> SASS</p>
<p className={style.skills__box}>Github</p>
<p className={style.skills__box}>Responsive Design</p>
<p className={style.skills__box}>Express Basico</p>
<p className={style.skills__box}>SQL Basico</p>
<p className={style.skills__box}>Figma</p>
<p className={style.skills__box}>Diseño UX</p>
<p className={style.skills__box}>BootStrap</p>
</div>

      </div>
      </div>


      


    </div>
  )
}

export default Part2
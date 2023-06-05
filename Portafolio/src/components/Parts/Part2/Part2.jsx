import React from 'react'
import style from './Part2.module.css'

const Part2 = () => {
  return (
    <div className={style.container__page} id='aboutme'>
      <br></br><br></br> <br></br><br></br> <br></br><br></br>
      <p className={style.tittle}>Acerca de mi</p>
      <div className={style.container__parrafo__acerca__de__mi}>
        <p className={style.parrafo}>Aquí encontrarás más información sobre mí, lo que hago y mis habilidades actuales,</p>
        <p className={style.parrafo}>principalmente en términos de programación y tecnología.</p>
      </div>

      <div className={style.position}>
        <div className={style.conoceme}>
          <h1 className={style.conoceme__tittle}>¡¡Conoceme!!</h1>
          <div className={style.row__parrafo}>
            <p className={style.parrafo__conoceme}>Soy un <strong>desarrollador web frontend</strong> que crea el front-end de sitios web y aplicaciones web que
              conducen al éxito del producto en general. Echa un vistazo a algunos de mis trabajos en la sección <strong>Proyectos</strong>.
              También me gusta compartir contenido relacionado con lo que he aprendido a lo largo de los años en
              <strong>desarrollo web</strong> para que pueda ayudar a otras personas de la comunidad de desarrolladores. Siéntase libre de conectarse o seguirme
              en mi <a className={style.link__linkedin} href="https://www.linkedin.com/in/aldo-flores-carreon-20bb66256/">Linkedin</a> donde publico contenido útil relacionado con el desarrollo y la programación web
              Estoy abierto a oportunidades de <strong>trabajo</strong> donde pueda contribuir, aprender y crecer.
              Si tiene una buena oportunidad que coincida con mis habilidades y experiencia, no dude en ponerse en <strong>contacto</strong> conmigo.</p>
          </div>
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
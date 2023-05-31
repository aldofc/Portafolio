import React from 'react'
import style from './Part2.module.css'

const Part2 = () => {
  return (
    <div className={style.container__page} id='aboutme'>
      <p className={style.tittle}>Acerca de mi</p>
      <p>Aquí encontrarás más información sobre mí, lo que hago y mis habilidades actuales,
        principalmente en términos de programación y tecnología.</p>
      <h1>¡¡Conoceme!!</h1>
      <p>Soy un desarrollador web frontend que crea el front-end de sitios web y aplicaciones web que
        conducen al éxito del producto en general. Echa un vistazo a algunos de mis trabajos en la sección Proyectos.
        También me gusta compartir contenido relacionado con lo que he aprendido a lo largo de los años en desarrollo web
        para que pueda ayudar a otras personas de la comunidad de desarrolladores. Siéntase libre de conectarse o seguirme
        en mi Linkedin donde publico contenido útil relacionado con el desarrollo y la programación web
        Estoy abierto a oportunidades de trabajo donde pueda contribuir, aprender y crecer.
        Si tiene una buena oportunidad que coincida con mis habilidades y experiencia, no dude en ponerse en contacto conmigo.</p>
      <h1>Mis habilidades</h1>

      <p>HTML
        CSS
        JavaScript
        React
        Redux
        SASS
        Github
        Responsive Design
        Express Basico
        SQL Basico
        Figma
        Diseño UX
        BootStrap


      </p>
      <button>Contactame</button>
    </div>
  )
}

export default Part2
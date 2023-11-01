import React from 'react'
import Form from '../Form/Form'
import style from './Contact.module.css'

const Contact = () => {
  return (
    <div className={style.container__Form} id='Contact'>
        <div className={style.container__tittle}>
            <h1 className={style.tittle}>Contacto</h1>
            </div>
        <div className={style.container__subtitulo}>
            <p className={style.parrafo}>No dude en ponerse en contacto conmigo enviando el siguiente formulario y me pondré en contacto con usted lo antes posible.</p>
            </div>
        <div className={style.position__form}><Form /></div>
    </div>
  )
}

export default Contact
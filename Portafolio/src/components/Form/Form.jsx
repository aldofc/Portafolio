import React from 'react'
import style from './Form.module.css'

const Form = () => {
  return (
    <div className={style.container__form}>
        <div className={style.form_container}>
	<p className={style.title}>Contactame</p>
	<form className={style.form}>
		<div className={style.input__group}>
			<label for="username">Nombre</label>
			<input type="text" name="username" id="username" placeholder=""/>
		</div>
		<div className={style.input__group}>
			<label for="email">Correo electronico</label>
			<input type="emmail"  id="email" placeholder=""/>
			{/* <div class="forgot">
				<a rel="noopener noreferrer" href="#">Forgot Password ?</a>
			</div> */}
		</div>

    <div className={style.input__group}>
			<label for="password">Asunto</label>
      <textarea required="" cols="30" rows="10" className={style.contact__form__input} placeholder="Escribe tu mensaje" name="message" id="message"></textarea>
			
			{/* <div class="forgot">
				<a rel="noopener noreferrer" href="#">Forgot Password ?</a>
			</div> */}
		</div>
		<button className={style.sign}>Enviar</button>
	</form>
	<div className={style.social__message}>
		<div className={style.line}></div>
		
		
	</div>
	
</div>
        
        </div>
  )
}

export default Form
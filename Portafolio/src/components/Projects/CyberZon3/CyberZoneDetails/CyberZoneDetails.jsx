import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './CyberZoneDetails.module.css'
import CyberZone from '../../../../assets/Untitled Project.jpg'



const CyberZon3Details = () => {
    return (
        <div>
            <section className={style.part1}>
                <div>
                    <NavLink to={'/'}><button>Volver</button></NavLink>
                    </div>
                <div className={style.tittle}><h1 className={style.tittle__style}>CyberZon3</h1></div>
                <div className={style.parrafo__position}><p className={style.parrafo__style}>Esta página contiene el estudio de caso del proyecto de código
                    abierto CyberZone que incluye la descripción general del proyecto, las herramientas utilizadas y los
                    enlaces en vivo al producto oficial.</p></div>
                <div
                    className={style.btn__position}>
                    <button
                        className={style.btn__style}>
                        <a
                            target={'_blank'}
                            className={style.decoration__none}
                            href="https://www.cyberzon3.com/">Link del proyecto</a> </button>
                </div>
            </section>

            <section className={style.part2}>
                <div className={style.container__img}>
                    <img className={style.size__image} src={CyberZone} alt="laptop" />
                    </div>
                <div className={style.tittle__description}>
                    <h2 className={style.tittle2__style}>Descripcion del proyecto</h2>
                    </div>
                <div className={style.description__long}>
                    <p className={style.decripcion__style}>CyberZon3 nace con la idea de crear un e-commerce 100% funcional y escalable
                        hasta donde el cliente quiera el proyecto trata de una tienda en linea de computadoras y componentes 
                        donde se pueden ver detalles del producto, ofertas, puntuacion del producto asi como comnetarios
                        del mismo, se puede filtrar u oridenar los productos por precio, marca, algun componentesen especifico
                        etc. ademas tenemos la opcion de cambiar de idioma entre español e ingles, se puede iniciar session tanto de manera local
                        como de terceros por ejmplo con google, se pueden agregar los productos que te gusten ya sea a una lista
                        de favoritos o directamente al carrito para proceder con su compra, tiene la opcion de suscribirse para procede 
                        recibir notificacion al correo, cuenta con los numeros de atencion asi como un boton que te lleva
                        a un chat en whatsapp para mayor informacion, tiene pasarela de pagos con mercado pago para 
                        el pago de el producto o de los productos previamente agregados al carrito, ademas
                        cuenta con un DashBoard de administrador un DasBoard de admin es la interfaz
                        que tiene el encargado ya que ahi puede crear cuentas para poder acceder al dashboard de admin 
                        ademas se puede ver una grafica sobre las ventas, tiene opciones para crear, editar u eliminar
                        productos todo desde un panel muy intuitivo, tiene la opcion de banear a ciertas personas por
                        hacer algun comentario fuera de lugar por ejmplo, cuenta con una lista de productos 
                        para saber que productos tienes actualmente en stock esto y mas estre ptoyecto fue elaborado por 7 personas
                        te invito a ver el proyecto mas abajo esta el link o puedes contactarme por linkedin para mas informacion.
                    </p>
                    </div>
                <div className={style.tecnologias}>
                    <h2 className={style.tittle3__style}>Tecnologias usadas</h2>
                    </div>
                <div className={style.tecnologias__row}>
                    <p className={style.Skills__box}>React</p>
                    <p className={style.Skills__box}>Redux</p>
                    <p className={style.Skills__box}>JavaScript</p>
                    <p className={style.Skills__box}>TypeScript</p>
                    <p className={style.Skills__box}>Mongo</p>
                    <p className={style.Skills__box}>CSS</p>
                    <p className={style.Skills__box}>HTML</p>
                    <p className={style.Skills__box}>GitHub</p>
                </div>
                <div className={style.tittle3}><h2 className={style.tittle4__style}>Ver Proyecto</h2></div>

                <div className={style.row__buttons}>
                    <div><button className={style.buttons__style}><a
                        target={'_blank'}
                        className={style.decoration__none}
                        href="https://www.cyberzon3.com/">Link del proyecto</a></button></div>
                    <div>
                        <NavLink to={'/'}><button className={style.buttons__style}>Volver al inicio</button></NavLink>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default CyberZon3Details
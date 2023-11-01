import React from 'react'
import style from './NavbarBoot.module.css'
import Aldo from '../../assets/1D45E652-6516-49C4-AE67-3F02BF00C2DF.jpeg'

const NabvarBoot = () => {
  return (
    <div className={style.container__fixed}>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
   <div className={style.img__and__name}>
   <img className={style.size__img} src={Aldo} alt="" />
   <p className={style.nameTop}>Aldo Flores</p>
   </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#home"><p className={style.myname__style}>Home</p></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#aboutme"><p className={style.myname__style}>Acerca de mi</p></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projects"><p className={style.myname__style}>Proyectos</p></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Contact"><p className={style.myname__style}>Contacto</p></a>
        </li>
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
      </ul>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NabvarBoot
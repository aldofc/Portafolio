import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import style from './Home.module.css'


const Home = () => {
    return (
        <div className={style.container__page__home}>
           <div>
           <Navbar />
           </div>
        </div>
    )
}

export default Home
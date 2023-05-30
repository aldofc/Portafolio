import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Part1 from '../../components/Parts/Part1/Part1'
import Part2 from '../../components/Parts/Part2/Part2'
import Part3 from '../../components/Parts/Part3/Part3'
import style from './Home.module.css'


const Home = () => {
    return (
        <div className={style.container__page__home}>
           <div>
           <Navbar />
           <Part1 />
           <Part2 />
           <Part3 />
           </div>
        </div>
    )
}

export default Home
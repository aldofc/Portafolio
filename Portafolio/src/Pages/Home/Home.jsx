import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Part1 from '../../components/Parts/Part1/Part1'
import Part2 from '../../components/Parts/Part2/Part2'
import Part3 from '../../components/Parts/Part3/Part3'
import Contact from '../../components/Contact/Contact'
import style from './Home.module.css'


const Home = () => {
    return (
        <div className={style.container__page__home}>
            <div>
                <div className={style.container__top__navbar}>
                    <Navbar />
                </div>
                <Part1 />
                <Part2 />
                <Part3 />
                <Contact />
            </div>
        </div>
    )
}

export default Home
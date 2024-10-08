import React from 'react'
import './Home.css'
import Slider from '../../components/slider/Slider'
import Hakkimda from '../../components/hakkimda/Hakkimda'
import Ozgecmis from '../../components/ozgecmis/Ozgecmis'
import foto from '../../assets/images/emin-oruc.jpg'

const Home = () => {
  return (
    <section>
        <Slider />
        <div className='main'>
            <div className='box'>
                <Hakkimda />
            </div>
            <div className='box'>
                <img src={foto} alt="Muhammed Emin ORUÇ" className='image'/>
            </div>
            <div className='box'>
                <Ozgecmis />
            </div>
        </div>
    </section>
  )
}

export default Home
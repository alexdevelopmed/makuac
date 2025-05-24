import React from 'react'
import Personaje from "../../assets/Personaje.jpeg"
/*import Logo from "../../assets/Logo.png"*/
import {motion} from "framer-motion"
import { slipeUp,slipeInFromSide } from '../../utility/animation'

const Hero = () => {
  return (
    <section className='mt-36'>
      <div className='grid grid-cols-1 md:grid-cols-2'>

        {/*Textos y descripcion*/}
        <div className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'>
          <motion.h1 
          /*src={Logo} alt="Logo del juego"*/
          className='text-white text-[50px]' 
          variants={slipeUp(0.2)}
          initial="initial"
          animate="animate"
          >
            Makuac Token
          </motion.h1>
          <motion.p 
          className='py-12 text-justify text-white'
          variants={slipeUp(0.3)}
          initial="initial"
          animate="animate"
          >  

            El objetivo principal de MaKuac Token (MKT) es brindar educación a travez del crecimiento
            personal que va mas alla del dinero junto a mis socios te mostrare como la IA, la Blockchain
            y las finanzas puede ser herramientas para tu desarrollo personal y espiritual.
            Este token, diseñado para captar la atención de los entusiastas de las criptomonedas y 
            los nuevos inversores, combina las enseñanzas financieras del mundo real con el dinamismo 
            de una narrativa divertida y única.
            <br/>
            <br/>
            MaKuac Token es una invitación a participar en un 
            movimiento que combina diversión, nostalgia y educación financiera. Creemos 
            que MKT puede ser el catalizador para que más personas exploren el mundo de 
            las criptomonedas y aprendan a gestionar sus finanzas de manera efectiva.
            ¡Deja que te acompaeñemos en este viaje de trasnformacion, siguenos para inspirarte y crecer!

          </motion.p>
          <motion.div 
          className='flex justify-center gap-4'
          variants={slipeUp(1)}
          initial="initial"
          animate="animate"
          >
            <a 
              target="_blank"
              rel="noopener noreferrer"
              href='https://drive.google.com/drive/folders/1RJzbHi-lFluyyoIVdjAVeU0vNKt05I3v'
              className='bg-purple-600 py-2 px-12 rounded-3xl text-white hover:bg-purple-700
              transition-all duration-300 items-center cursor-pointer'>
              Contenido Gratuito
              <i className="bi bi-book text-xl ml-2"></i>
            </a>
            <a 
              target="_blank"
              rel="noopener noreferrer"
              href='https://t.me/+g_4u1SnFjz0wN2Nh' 
              className='text-white flex items-center cursor-pointer'
            >
              Haz Parte
              <i className="bi bi-telegram text-xl ml-2"></i>
            </a>
          </motion.div>
        </div>
        
        {/*Imagen*/}
        <motion.div 
        className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'
        variants={slipeInFromSide("right", 0.5)}
        initial="initial"
        animate="animate"
        >
          <img src={Personaje} alt="Personaje del juego"/>
        </motion.div>
      </div>
  </section>
  )
}

export default Hero
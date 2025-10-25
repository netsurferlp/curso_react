import React from 'react'
import { Link } from 'react-router-dom'
import styles from './About.module.css'

const About = () => {
  return (
    <>
    <img src="https://www.netsurferlp.ar/curso_frontend/media/profile_pagina.png" alt="Foto de Perfil" width="300px" className={styles.fotoPerfil}/>
    <div className={styles.nosotros}>
        <h1 className={styles.txtsobreMi}>Sobre mi</h1>
                        <p className={styles.txtnosotros}>
                            - Versátil - Pro-activo - Autodidacta - Curioso - Incansable -</p>
                        <p className={styles.txtnosotros}>
                            Soy Versátil, me adapto a los cambios y paradigmas del momento.           
                            Soy Pro-activo siempre busco mejorar o modificar para buscar el mejor rendimiento y la relación costo-beneficio.
                            Soy Autodidacta, si algo no tengo conocimiento, me pongo a investigar y estudio para aprender nuevos conocimientos.
                            Soy Curioso porque siempre estoy aprendiendo nuevas cosas, investigo, trato de estar en lo ultimo de la tecnología y tendencias.
                            Soy Incansable, no me doy por vencido ante los problemas, analizo y busco la mejor solución. 
                        </p>
        <Link to="/"><button>Volver al Inicio</button></Link>

    </div>
    </>
  )
}

export default About
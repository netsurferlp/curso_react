import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Service.module.css'

const Service = ()=> {
  return (
    <div className={styles.servicios}>
      <hr className={styles.hr}/>
        <h1 className={styles.txtTitulo}>Servicios Incluidos</h1>
        <hr className={styles.hr}/>
        <p className={styles.txt}>Todos Nuestros Servicios cuentan con las siguientes fases de desarrollo</p>
        <ul className={styles.listaServicios}>
            <li className={styles.item}>Análisis de Requerimientos</li>
            <p className={styles.txt}>Entrevista previa con el cliente</p>
            <li className={styles.item}>Diseño de la Solución</li>
            <p className={styles.txt}>Diagramas Entidad Relacion - DFD - Modelizacion de Bases de Datos</p>
            <li className={styles.item}>Desarrollo e Implementación</li>
            <p className={styles.txt}>Desarrollo de Prototipos - </p>
            <li className={styles.item}>Pruebas y Control de Calidad</li>
            <p className={styles.txt}>Pruebas Unitarias - Pruebas de Integración - Pruebas de Sistema</p>
            <li className={styles.item}>Despliegue y Mantenimiento</li>
            <p className={styles.txt}>Implementación en el entorno de producción - Mantenimiento Correctivo y Evolutivo</p>
        </ul> 
        <Link to="/curso_react/"><button>Volver al Inicio</button></Link>

    </div>
  )
}

export default Service
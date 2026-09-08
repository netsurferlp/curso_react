import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
        <ul className={styles.lista}>
            <li className={styles.item}><Link to="/curso_react/" className={styles.link}>Inicio</Link></li>
            <li className={styles.item}><Link to="/curso_react/about" className={styles.link}>Sobre mi</Link></li>
            <li className={styles.item}><Link to="/curso_react/service" className={styles.link}>Servicios</Link></li>
            <li className={styles.item}><Link to="/curso_react/product" className={styles.link}>Productos</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar
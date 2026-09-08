import React from 'react'
import styles from "./Footer.module.css";

const Footer= () => {
  return (
    <footer className={styles.footer}>
        <hr />
       <div class="copyright">
                    <a href="https://www.linkedin.com/in/gastonpessolano" class="linkedin"><i class="bx bxl-linkedin"></i></a>  &copy;Copyright 2025 <strong><span>Pessolano Gastón</span></strong>
                </div>
    </footer>
  )
}

export default Footer
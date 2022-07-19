import React, { useState } from 'react';
import styles from './NavBar.module.css';
import logo from '../../assets/imgs/netflix-logo.png';

const NavBar = () => {
  const [menuState, setMenuState] = useState(false);
  const toggleMenu = () => {
    setMenuState(!menuState);
  }
  return (
    <>    
      <nav>
        <a href={'/'}><img src={logo} className={styles.logo}></img></a>
        <div className={`${styles.toggle} ` + (menuState && `${styles.active}`)} onClick={toggleMenu}></div>
        <ul className={`${styles.navigation} ` + (menuState && `${styles.active}`)}>
          <li><a href={'/'}>Inicio</a></li>
          <li><a href={'/'}>Series</a></li>
          <li><a href={'/'}>Peliculas</a></li>
          <li><a href={'/'}>Novedades populares</a></li>
          <li><a href={'/'}>Mi lista</a></li>
        </ul>
      </nav>     
    </>
  )
}

export default NavBar
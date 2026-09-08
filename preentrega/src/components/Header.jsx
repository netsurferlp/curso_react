import NavBar from "./NavBar";  
import styles from "./Header.module.css"
const Header =() => {


return (
<header className={styles.header} >
<h1>NetsurferLP - Software Developer</h1>
<NavBar />
</header>
);
}

export default Header;
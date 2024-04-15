import styles from "./style.module.css"
import { Link } from "react-router-dom";

function Footer() {
  return ( 
    <footer className={styles.footer}>
      <Link to="/" className={styles.link}><h4>Adventure Trails FD</h4></Link>
      <nav className={styles.nav}>
        <a href="https://github.com/WillyAraujo" className={styles.link}>GitHub</a>
        <a href="https://instagram.com" className={styles.link}>Insta</a>
        <a href="https://linkedin.com" className={styles.link}>LinkedIn</a>
      </nav>
    </footer>
  );
}

export default Footer;
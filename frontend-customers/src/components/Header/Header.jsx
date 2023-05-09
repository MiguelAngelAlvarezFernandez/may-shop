import logoMayShop from "./logoMayShop.png"
import styles from "./Header.module.css"

function Header() {
    return (
      <header className={styles.header}>
      <img className={styles.logoMayShop} src={logoMayShop} alt="Logo May Beauty Shop"/>
      <h1 className={styles.title}>MAY BEAUTY SHOP</h1>
      </header>
    );
  }
  
  export default Header;
import styles from "./Header.module.css";

const Header  = () =>{
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <h1>Portfolio Next</h1>
                </div>
                <nav>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Contato</a></li>
                    <li><a href="#">Portfolio</a></li>
                </nav>
            </header>
        </div>
    )
}

export default Header
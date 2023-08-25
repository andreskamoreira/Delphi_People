import styles from '../Home/Home.module.css'
import logo from '../../assets/img-logo.png'
import { FaBeer } from 'react-icons/fa';

export default function Home() {
    return(
        <>
            <header>
                <div className={styles.info_header}>
                    <div className={styles.logo}>
                        <a href="#"><img src={logo} alt="logo"/></a>
                    </div>
                    <div className={styles.icon_header}>
                        <i class='fa-solid fa-magnifying-glass'></i>
                    </div>
                </div>
            </header>
        </>
    )

}
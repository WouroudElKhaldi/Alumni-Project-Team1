import styles from './Logo.module.css'
import { Link } from 'react-router-dom'

export const Logo = ({color}) =>{
    const logoColor = color === "green" ? styles.LogoGreen : styles.LogoWhite
    const span = color === "green" ? styles.NormalSpan : styles.FooterSpan ;

    return(
        <Link to='/'>
            <div className={styles.Container}>
                <p className={`${styles.Logo} ${logoColor}`}>TechNow</p>
                <span className={`${styles.Span} ${span}`}>News</span>
            </div>
        </Link>
    )
}
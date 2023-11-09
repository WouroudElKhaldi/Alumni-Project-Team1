import styles from"./Footer.module.css"
import React from "react"
import {BsFacebook , BsInstagram , BsLinkedin , BsWhatsapp} from 'react-icons/bs'
import { Logo } from "../../Components/Logo/Logo"
import { Link } from "react-router-dom"

const Footer =()=>{
    return (
        <>
        <footer className={styles.footer}>
            <div className={styles.top}></div>

            <div className={styles.footerRow}>
                <div className={styles.footerCol}>
                    <Logo/>
                </div>
                <div className={styles.footerCol}>
                    <h3 className={styles.h3}>About Us</h3>
                    <p className={styles.p}>Welcome to Technow! We're here to make tech updates easy. 
                        We send you the coolest tech stuff every day.
                        No need to search. Join us and stay tech-smart!</p>
                </div>

                <div className={styles.footerCol}>
                    <h3 className={styles.h3}>Our Pages</h3>
                    <ul className={styles.links}>
                    <Link to='newsletter'>
                        <li className={styles.liFooter}>NewsLetters</li>
                    </Link>
                    <Link to='/blog'>
                        <li className={styles.liFooter}>Blogs</li>
                    </Link>
                    <Link to='/contact'>
                        <li className={styles.liFooter}>Contact Us </li>
                    </Link>
                        
                    </ul>
                </div>
            
                <div className={styles.footerCol}>
                    <h3 className={styles.h3}>Category</h3>
                    <ul className={styles.links}>
                            <li className={styles.liFooter}>
                                <Link to='/newsCategory/Engineering'>
                                Engineering
                                </Link>
                            </li>
                            <li className={styles.liFooter}>
                                <Link to='/newsCategory/Cloud'>
                                    Cloud
                                </Link>
                            </li>
                            <li className={styles.liFooter}>
                                <Link to='/newsCategory/Web'>
                                    Web
                                </Link>
                            </li>
                            <li className={styles.liFooter}>
                                <Link to='/newsCategory/App'>
                                    App
                                </Link>
                            </li>                               
                            <li className={styles.liFooter}>
                                <Link to='/newsCategory/AI'>
                                    AI
                                </Link>
                            </li>                                            
                    </ul>
                </div>
            </div>
            <div className={`${styles.footerCol} ${styles.socials}`}>
                    <ul className={styles.icons}>
                        <li className={styles.liFooter}>
                            <Link to='https://www.facebook.com/profile.php/?id=100002482212667&name=xhp_nt__fb__action__open_user'>
                            <BsFacebook className={styles.icon}/>
                            </Link>
                        </li>
                        <li className={styles.liFooter}>
                            <Link to='https://wa.me/+96176843642'>
                            <BsWhatsapp className={styles.icon}/>
                            </Link>
                        </li>
                        <li className={styles.liFooter}>
                            <Link to='https://www.instagram.com/omar__banat?igshid=MXBlZ2Y2Z29zcGgzcQ=='>
                            <BsInstagram className={styles.icon}/>
                            </Link>
                        </li>
                        <li className={styles.liFooter}>
                            <Link to='https://www.linkedin.com/in/banat-omar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                            <BsLinkedin className={styles.icon}/>
                            </Link>
                        </li>
                    </ul>
                </div>

            <div className={styles.copyright}>
                <p className={styles.pcopyright}> &copy; 2023 <span className={styles.technow} > technow</span>. All Rights Reserved </p>
            </div>
        </footer>
    </> 
    );
}
export default Footer;
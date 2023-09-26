import styles from './page.module.css'
import Link from 'next/link'
import AboutHeading from '../../components/About/AboutHeading'

export default function About() {
  return (
    <div className={styles.contact}>
        <AboutHeading />
        <ul className={styles.links}>
            <li>
                <a href="https://linkedin.com/in/masonturnerdev" target="_blank" className={styles.buttonContainer}>
                        <div className={`${styles.corner} ${styles.cornerTopLeft}`} />
                        <div className={`${styles.corner} ${styles.cornerTopRight}`} />
                        <div className={`${styles.corner} ${styles.cornerBottomRight}`} />
                        <div className={`${styles.corner} ${styles.cornerBottomLeft}`} />
                        <span className={styles.homeButton}>linkedin</span>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/masonturnerdev" target="_blank" className={styles.buttonContainer}>
                    <div className={`${styles.corner} ${styles.cornerTopLeft}`} />
                    <div className={`${styles.corner} ${styles.cornerTopRight}`} />
                    <div className={`${styles.corner} ${styles.cornerBottomRight}`} />
                    <div className={`${styles.corner} ${styles.cornerBottomLeft}`} />
                    <span className={styles.homeButton}>twitter</span>
                </a>
            </li>
            <li>
                <a href="https://github.com/M47O" target="_blank" className={styles.buttonContainer}>
                    <div className={`${styles.corner} ${styles.cornerTopLeft}`} />
                    <div className={`${styles.corner} ${styles.cornerTopRight}`} />
                    <div className={`${styles.corner} ${styles.cornerBottomRight}`} />
                    <div className={`${styles.corner} ${styles.cornerBottomLeft}`} />
                    <span className={styles.homeButton}>github</span>
                </a>
            </li>
            <li>
                <a href="mailto:turneramason@gmail.com?subject=Hello!" target="_blank" className={styles.buttonContainer}>
                    <div className={`${styles.corner} ${styles.cornerTopLeft}`} />
                    <div className={`${styles.corner} ${styles.cornerTopRight}`} />
                    <div className={`${styles.corner} ${styles.cornerBottomRight}`} />
                    <div className={`${styles.corner} ${styles.cornerBottomLeft}`} />
                    <span className={styles.homeButton}>Email me</span>
                </a>
            </li>
        </ul>
    </div>
  )
}

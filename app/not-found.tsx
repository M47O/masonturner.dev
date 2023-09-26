import Link from "next/link"
import styles from "./not-found.module.css"
export default function NotFound(){
    return (
        <div className={styles.errorContainer}>
            <p className={styles.error}><span className={styles.errorNumber}>Error 404:</span> This route does not exist.</p>
            <Link href="/"className={styles.buttonContainer}>
                <div className={`${styles.corner} ${styles.cornerTopLeft}`} />
                <div className={`${styles.corner} ${styles.cornerTopRight}`} />
                <div className={`${styles.corner} ${styles.cornerBottomRight}`} />
                <div className={`${styles.corner} ${styles.cornerBottomLeft}`} />
                <span className={styles.homeButton}>Navigate Home</span>
            </Link>
        </div>
    )
}
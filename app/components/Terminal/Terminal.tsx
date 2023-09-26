import styles from './Terminal.module.css';
import Clock from './Clock'
import Breadcrumb from './Breadcrumb'
export default function Terminal({
    children,
  }: {
    children: React.ReactNode
  }){
    return (
        <main className={styles.container}>
            <div className={`${styles.corner} ${styles.cornerTopLeft}`} />
            <div className={`${styles.corner} ${styles.cornerTopRight}`} />
            <div className={`${styles.corner} ${styles.cornerBottomRight}`} />
            <div className={`${styles.corner} ${styles.cornerBottomLeft}`} />

            <h1 className={styles.heading}>Mason Turner</h1>
            <div className={styles.header}>
                <Breadcrumb />
                <Clock />
            </div>
            {children}
        </main>
       )
}
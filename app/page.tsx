import styles from './page.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li><Link href="/about" className={styles.link}>about me</Link></li>
        <li><Link href="/projects" className={styles.link}>projects</Link></li>
        <li><a href="https://github.com/M47O" className={styles.link}>github</a></li>
        <li><Link href="/settings" className={styles.link}>settings</Link></li>
      </ul>
    </div>
  )
}

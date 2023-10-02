import styles from './page.module.css'
import Link from 'next/link'

export default function Projects() {
  return (
    <div className={styles.container}>
    <ul className={styles.list}>
      <div>
      <li><Link href="/projects/fullstack" className={styles.link}>fullstack</Link></li>
      <p className={styles.subtitle}>end-to-end applications</p>
      </div>
      <div>
        <li><Link href="/projects/frontend" className={styles.link}>frontend</Link></li>
        <p className={styles.subtitle}>user interfaces and static sites</p>
      </div>
      <div>
        <li><Link href="/projects/doohickeys" className={styles.link}>doohickeys</Link></li>
        <p className={styles.subtitle}>toys, tools, and gadgets</p>
      </div>
    </ul>
  </div>
  )
}

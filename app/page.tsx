import styles from './page.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.about}><Link href="/about" className={`${styles.link}`}>about me</Link></li>
        <li className={styles.projects}><Link href="/projects" className={styles.link}>projects</Link></li>
        <li className={styles.github}><a href="https://github.com/M47O" className={styles.link}>github</a></li>
        <li className={styles.settings}><Link href="/" className={styles.link}>settings<span className={styles.comingsoon}> /* coming soon */</span></Link> </li>
        <div className={styles.feedContainer}>
					<div className={`${styles.feed} ${styles.feedAbout}`} />
					<div className={`${styles.feed} ${styles.feedProjects}`} />
					<div className={`${styles.feed} ${styles.feedGithub}`} />
					<div className={`${styles.feed} ${styles.feedSettings}`} />
          <span className={styles.standBy}>
            <div className={`${styles.corner} ${styles.cornerTopLeft}`} />
            <div className={`${styles.corner} ${styles.cornerBottomRight}`} />
            Stand By
            </span>
					<div className={styles.feedOverlay} />
			</div>
      </ul>
    </div>
  )
}

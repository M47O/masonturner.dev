import styles from './page.module.css'
import Link from 'next/link'
import AboutHeading from '../components/About/AboutHeading'

export default function About() {
  return (
    <div className={styles.about}>
        <AboutHeading />
        <p className={styles.blurb}>Hi! I'm Mason, a freelance software engineer in Southern Virginia. I have experience across the stack, and I have a particular fondness for making things that are fun to engage with, look neat, and leave an impression.</p>
        <hr className={styles.hr}/>
        <p className={styles.blurb}>Throughout my adult life, I've tried to orient myself on one chief principle: <strong>I want to have a tangible, meaningful, and positive impact on others</strong>.</p>
        <p className={styles.blurb}>After learning programming, I quickly fell in love with it as it became the best tool at my disposal to work towards this goal. No other field I've worked in has afforded me the opportunity to marry this goal with my desires for a creative outlet, my passion for life-long learning, and my interest in technology.</p>
        <p className={styles.blurb}>I say all this to illustrate how fulfilling software engineering can be. If you've never written a line of code and have zero clue what programming and software engineering entails, it's so much more than growing a full beard around your neck and wiping Dorito crumbs off your cool RGB keyboard every few minutes. It is a way to serve others, challenge yourself, and create things you could have only ever dreamt of before.</p>
        <p className={styles.blurb}>If you're convinced, I'd love to help you start your journey in programming as a way of paying forward all the help and resources I was given to start mine.</p>

        <Link href="/about/contact" className={styles.buttonContainer}>
                <div className={`${styles.corner} ${styles.cornerTopLeft}`} />
                <div className={`${styles.corner} ${styles.cornerTopRight}`} />
                <div className={`${styles.corner} ${styles.cornerBottomRight}`} />
                <div className={`${styles.corner} ${styles.cornerBottomLeft}`} />
                <span className={styles.homeButton}>get in touch</span>
        </Link>
    </div>
  )
}

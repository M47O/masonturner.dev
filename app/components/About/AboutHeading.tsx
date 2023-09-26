"use client"

import { usePathname } from "next/navigation"
import styles from './AboutHeading.module.css'

export default function AboutHeading(){
    const pathname = usePathname()
    const sections = pathname.split("/")
    const currentSection = sections[sections.length - 1][0].toUpperCase() + sections[sections.length- 1].slice(1)
    
    return(
        <h2 className={styles.heading}><span className={styles.system}>System log:</span> <span className={styles.section}>{currentSection}</span></h2>
    )
}
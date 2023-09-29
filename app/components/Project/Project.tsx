"use client"

import { AiOutlineLink as LinkIcon, AiFillGithub as GitHubIcon } from 'react-icons/ai'
import { CiMinimize1 as Minimize} from 'react-icons/ci' 
import styles from "./Project.module.css"
import { useState } from 'react'
import TechIcon from '../TechIcon/TechBadge'
import type { ProjectProps } from '@/lib/projects'

export default function Project({src, site, repo, title, description, technologies }: ProjectProps){
    const [showDesc, setShowDesc] = useState(false)

    return (
        <li className={styles.project}>
            <h2 className={styles.title}>{title}</h2>
            <div 
                className={styles.imgContainer}
                onClick={() => setShowDesc(prev => !prev)}
            >
                <div className={`${styles.corner} ${styles.cornerTopLeft}`}></div>
                <div className={`${styles.corner} ${styles.cornerTopRight}`}></div>
                <div className={`${styles.corner} ${styles.cornerBottomRight}`}></div>
                <div className={`${styles.corner} ${styles.cornerBottomLeft}`}></div>
                <img className={styles.img} src={src} alt={`Demo image of ${title}`} />
                <div className={styles.projectLinks} onClick={(e) => e.stopPropagation()}>
                    <a href={repo} target='_blank'>
                        <GitHubIcon className={styles.icon} />
                    </a>
                    <a href={site} target='_blank'>
                        <LinkIcon className={styles.icon} />
                    </a>
                </div>
                <div 
                    className={`${styles.descriptionContainer} ${showDesc ? styles.show : ''}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={styles.techContainer}>
                        {technologies.map(tech => <TechIcon tech={tech}/>)}
                    </div>
                    <hr className={styles.hr}/>
                    <p className={styles.description}>{description}</p>
                    <Minimize 
                        className={styles.minimize}
                        onClick={() => setShowDesc(false)}
                    />
                </div>
            </div>
        </li>
    )
}

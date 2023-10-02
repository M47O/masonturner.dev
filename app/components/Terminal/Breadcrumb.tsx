"use client"

import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import styles from './Terminal.module.css'
import { AiOutlineRollback as BackIcon} from 'react-icons/ai'


export default function Breadcrumb() {
    const router = useRouter()
    const pathname = usePathname()

    const segments = pathname.split('/').filter(Boolean); // filter(Boolean) will remove any empty strings (like the first one when pathname starts with /)

    const breadcrumbLinks = segments.map((segment, index) => {
        const linkPath = `/${segments.slice(0, index + 1).join('/')}`;

        return (
            <span key={linkPath}>
                /
                <Link href={linkPath}>
                    {segment}
                </Link>
            </span>
        );
    });
    
    return (
        <div className={styles.navigation}>
            <span className={styles.breadcrumb}>
                {pathname === '/' ? <><Link href="/">~</Link>/</> : <Link href="/">~</Link>}
                {breadcrumbLinks}
            </span>
            
            {pathname !== '/' &&
                <div className={styles.back} onClick={router.back}>
                    <BackIcon/> 
                    {/* <span className={styles.backText}>go back</span> */}
                </div>
            }
        </div>
    )
}
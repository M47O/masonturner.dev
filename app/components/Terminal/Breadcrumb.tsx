"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './Terminal.module.css'


export default function Breadcrumb() {
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
        <span className={styles.breadcrumb}>
            {pathname === '/' ? <><Link href="/">~</Link>/</> : <Link href="/">~</Link>}
            {breadcrumbLinks}
        </span>
    )
}
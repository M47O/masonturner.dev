"use client"

import { useState, useEffect } from 'react';
import styles from './Terminal.module.css'
export default function Clock() {
    const initialDate = new Date();

    const [currentTime, setCurrentTime] = useState({hours: initialDate.getHours(), minutes: initialDate.getMinutes(), seconds: initialDate.getSeconds()});
    const [isTwentyFourHour, setIsTwentyFourHour] = useState(true); 

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date()
            setCurrentTime({
                hours: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds()
            });
        }, 1000);

        return () => {
        clearInterval(interval);
        };
    }, []);

    const toggleTimeFormat = () => {
        setIsTwentyFourHour(prev => !prev);
    }

    const formatTime = () => {
        let { hours, minutes } = currentTime;
        if (!isTwentyFourHour) {
        const modifier = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // if 0, make it 12
        return `${hours}:${String(minutes).padStart(2, '0')} ${modifier}`;
        }
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    }

    return <span suppressHydrationWarning={true} onClick={toggleTimeFormat} className={styles.time}>{formatTime()}</span>;
}
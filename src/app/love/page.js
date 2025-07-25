'use client'
import React, { useEffect } from 'react'
import styles from './love.module.css'

const LovePage = () => {
    useEffect(() => {
        const createFloatingHeart = () => {
            const heart = document.createElement('div')
            heart.className = styles.smallHeart
            heart.style.left = `${Math.random() * 100}vw`
            heart.style.animationDuration = `${Math.random() * 3 + 2}s`
            document.body.appendChild(heart)

            setTimeout(() => {
                heart.remove()
            }, 5000)
        }

        const interval = setInterval(createFloatingHeart, 300)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>I Just Love You... ❤️❤️</h1>
            <h3 className={styles.thank}>Thank you for coming into my "Life" again</h3>
            <h2 className={styles.top}>Thank you for Being Mine as Always.....</h2>
            <div className={styles.heart}></div>
        </div>
    )
}

export default LovePage

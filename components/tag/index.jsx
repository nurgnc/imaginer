"use client"
import React from 'react'
import styles from './styles.module.scss'

const Tag = ({ title, onClick }) => {
    const handleClick = () => {
        if (onClick) {
            onClick(title)
        }
    }
    return (
        <button className={styles.tag} onClick={handleClick}>{title}</button>
    )
}

export default Tag 
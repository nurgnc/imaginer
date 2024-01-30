import React from 'react'
import styles from './styles.module.scss'
import GithubIcon from "@/assets/icons/github.svg"
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link href="https://github.com/nurgnc" target="_blank">
                <GithubIcon />
            </Link>
            <p>Made by <b>Nur Genç</b>
                <br />
                and, built with <b>Next.js</b>
            </p>
        </footer>
    )
}

export default Footer
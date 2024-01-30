"use client"
import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useHomePage } from '../useHomepage'

const PromptForm = () => {
    const { prompt, setPrompt, generateImage } = useHomePage()

    const handlePromptChange = (event) => {
        setPrompt(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        generateImage()
    }
    return (
        <div className={styles.promptForm}>
            <form className={styles.form} onSubmit={handleFormSubmit}>
                <textarea className={styles.promptTextarea} type='text' value={prompt} onChange={handlePromptChange} required rows="2" placeholder='An orchestra of characters playing instruments on fire in a chapel + surrounded by ghosts made out of chiseled marble'></textarea>
                <button className={styles.generateButton} type='submit'>Generate</button>
            </form>
        </div>
    )
}

export default PromptForm
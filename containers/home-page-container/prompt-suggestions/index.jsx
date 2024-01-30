"use client"
import Tag from '@/components/tag'
import React from 'react'
import { useHomePage } from '../useHomepage'
import { SUGGESTIONS } from './constants'
import styles from './styles.module.scss'

const PromptSuggestions = () => {
    const { changePrompt } = useHomePage()
    return (
        <div className={styles.promptSuggestions}>
            <h3 className={styles.title}>Nothing in mind? Try one of these prompts:</h3>
            <div className={styles.suggestions}>
                {
                    SUGGESTIONS.map((suggestion) => (
                        <Tag onClick={changePrompt} title={suggestion.title} key={suggestion.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default PromptSuggestions
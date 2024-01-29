import Tag from '@/components/tag'
import React from 'react'
import { SUGGESTIONS } from './constants'
import styles from './styles.module.scss'

const PromptSuggestions = () => {
    return (
        <div className={styles.promptSuggestions}>
            <h3 className={styles.title}>Nothing in mind? Try one of these prompts:</h3>
            <div className={styles.suggestions}>
                {
                    SUGGESTIONS.map((suggestion) => (
                        <Tag title={suggestion.title} key={suggestion.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default PromptSuggestions
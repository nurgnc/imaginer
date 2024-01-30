"use client"
import { useContext, createContext, useState, useMemo } from "react";

const HomePageContext = createContext()

export const HomePageProvider = ({ children }) => {
    const [prompt, setPrompt] = useState('')

    const generateImage = async () => {
        try {
            const response = await fetch("/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    prompt
                })
            })

            if (!response.ok) throw new Error("Failed to create")
            const generatedImgae = await response.json()
        } catch (error) {
            throw new Error("Failed to generate")
        }
    }

    const changePrompt = (newPrompt) => {
        setPrompt(newPrompt)
        window.scrollTo(0, 0)
    }

    const data = useMemo(() => ({
        prompt,
        setPrompt,
        generateImage,
        changePrompt
    }), [prompt])

    return <HomePageContext.Provider value={data}>
        {children}
    </HomePageContext.Provider>
}

export const useHomePage = () => {
    const context = useContext(HomePageContext)
    return context
}
"use client"
import { useContext, createContext, useState, useMemo } from "react";

const HomePageContext = createContext()

export const HomePageProvider = ({ children }) => {
    const [prompt, setPrompt] = useState('')

    const generateImage = () => { }

    const data = useMemo(() => ({
        prompt,
        setPrompt,
        generateImage
    }), [prompt])

    return <HomePageContext.Provider value={data}>
        {children}
    </HomePageContext.Provider>
}

export const useHomePage = () => {
    const context = useContext(HomePageContext)
    return context
}
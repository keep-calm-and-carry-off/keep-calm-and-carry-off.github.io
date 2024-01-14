import { useContext } from "react"
import { ThemeContext } from "../helpers/context"

export const useThemeContext = () => {
    const context = useContext(ThemeContext)
    if (!context) return 'light'
    return context
}
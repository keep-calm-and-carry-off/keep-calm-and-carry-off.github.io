import { useContext } from "react"
import { ThemeContext } from "src/helpers/providers/ThemeProvider"

export const useThemeContext = () => useContext(ThemeContext)
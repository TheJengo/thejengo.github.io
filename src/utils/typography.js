import Typography from 'typography'
import funstonTheme from 'typography-theme-funston'

funstonTheme.overrideThemeStyles = () => {
    return {
    }
} 

const typography = new Typography(funstonTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
    typography.injectStyles()
}

export const rhythm = typography.rhythm
export const scale = typography.scale
export default typography
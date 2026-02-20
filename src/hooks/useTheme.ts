import { useThemeContext } from "../providers/ThemeProvider";

export {
    THEMES,
    DEFAULT_THEME,
    STORAGE_KEY,
    getActiveTheme,
} from "../providers/ThemeProvider";
export type { Theme, UseThemeReturn } from "../providers/ThemeProvider";

export const useTheme = useThemeContext;

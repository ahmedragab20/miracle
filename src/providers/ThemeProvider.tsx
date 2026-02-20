import { useLocation } from "@solidjs/router";
import {
    createSignal,
    createContext,
    useContext,
    ParentComponent,
} from "solid-js";
import { isServer, getRequestEvent } from "solid-js/web";

export const THEMES = [
    "nordfox",
    "nightfox",
    "carbonfox",
    "dayfox",
    "dracula",
    "onedark",
    "gruvbox",
    "material",
    "monokai",
    "solarized-dark",
    "solarized-light",
    "tokyo-night",
    "catppuccin-mocha",
    "catppuccin-latte",
    "rose-pine",
    "ayu-dark",
    "ayu-light",
    "github-dark",
    "github-light",
    "github-dimmed",
    "nord",
    "everforest-dark",
    "everforest-light",
    "kanagawa",
    "oxocarbon",
    "poimandres",
    "tokyo-night-storm",
    "shades-of-purple",
    "synthwave",
    "horizon",
    "sonokai",
    "material-ocean",
    "vscode-dark-plus",
    "palenight",
    "night-owl",
    "ayu-mirage",
    "rose-pine-dawn",
    "tokyo-night-day",
    "one-light",
    "linear-light",
    "nord-snow-storm",
    "zenburn",
    "panda",
    "darcula",
    "papercolor-light",
    "intellij-light",
    "flat-light",
    "cobalt2",
    "monokai-pro",
    "winter-is-coming",
    "night-owl-light",
    "oceanic-next",
    "city-lights",
    "andromeda",
    "cyberpunk",
    "jellybeans",
    "tomorrow-night",
    "tomorrow-night-eighties",
    "tomorrow-night-blue",
    "twilight",
    "espresso",
    "kimbie-dark",
    "gruvbox-material",
] as const;

export type Theme = (typeof THEMES)[number];

export const DEFAULT_THEME: Theme = "nordfox";
export const STORAGE_KEY = "theme";

export interface UseThemeReturn {
    theme: () => Theme;
    setTheme: (theme: Theme) => void;
    themes: readonly Theme[];
    defaultTheme: Theme;
}

const ThemeContext = createContext<UseThemeReturn>();

/**
 * Get the active theme from cookies
 * This runs on both server and client
 */
export const getActiveTheme = (): Theme => {
    let theme: string | undefined | null;

    const event = getRequestEvent();
    if (event) {
        const cookieStr = event.request.headers.get("cookie");
        if (cookieStr) {
            const match = cookieStr.match(
                new RegExp("(^| )" + STORAGE_KEY + "=([^;]+)"),
            );
            if (match) theme = match[2];
        }
    } else {
        theme = document.cookie.match(
            new RegExp("(^| )" + STORAGE_KEY + "=([^;]+)"),
        )?.[2];
    }

    if (theme && THEMES.includes(theme as Theme)) {
        return theme as Theme;
    }

    return DEFAULT_THEME;
};

export const ThemeProvider: ParentComponent = (props) => {
    const [theme, setThemeSignal] = createSignal<Theme>(getActiveTheme());

    const setTheme = (newTheme: Theme) => {
        if (!THEMES.includes(newTheme)) {
            console.warn(`Invalid theme: ${newTheme}. Using default theme.`);
            newTheme = DEFAULT_THEME;
        }

        setThemeSignal(newTheme);

        if (isServer) {
            const event = getRequestEvent();
            if (event) {
                const cookieValue = `${STORAGE_KEY}=${newTheme}; Path=/; Max-Age=31536000; SameSite=Lax`;
                event.response.headers.append("Set-Cookie", cookieValue);
            }
        } else {
            document.documentElement.setAttribute("data-theme", newTheme);
            document.cookie = `${STORAGE_KEY}=${newTheme}; path=/; max-age=31536000; SameSite=Lax`;
        }
    };

    const value: UseThemeReturn = {
        theme,
        setTheme,
        themes: THEMES,
        defaultTheme: DEFAULT_THEME,
    };

    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeContext must be used within a ThemeProvider");
    }
    return context;
};

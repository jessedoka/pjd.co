"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
    const { setTheme, theme } = useTheme()

    return (
        // button toggles between light and dark mode

        <button
            aria-label="Toggle Dark Mode"
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {(theme === "dark" ? <Sun /> : <Moon />)}
        </button>

    )
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                inter: ['var(--font-inter)', 'sans-serif'],
            },
            fontSize: {
                'ag-14': ['14px', '20px'],
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                // Specific Dashboard Colors
                'bw-sidebar-light': '#FFFFFF',
                'bw-bg-light': '#F7F9FB',
                'bw-bg-dark': '#1C1C1C',
                'bw-bg-dark-66': '#1C1C1C66',
                'bw-card-light': '#F7F9FB',
                'bw-card-dark': '#FFFFFF0D',
                'bw-customer-light': '#E3F5FF',
                'bw-growth-light': '#E5ECF6',
                "bw-border-dark": "#FFFFFF1A",
                "bw-text-dark-66": "#FFFFFF66",
                "bw-text-dark-33": "#FFFFFF33",
                "bw-text-secondary": "#1C1C1C66",
                "bw-text-tertiary": "#1C1C1C33",
                "bw-purple": "#C6C7F8",
                "bw-sky-light": "#A8C5DA",
                "bw-sky-light-44": "#A8C5DA44",
                "bw-nav-hover-light": "#1C1C1C0D",
                "bw-tooltip-bg": "#1C1C1CCC",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },
    plugins: [],
}
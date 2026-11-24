import type { Config } from 'tailwindcss'

// all in fixtures is set to tailwind v3 as interims solutions

const fertiterraGreen = {
  50: "#effdf5",
  100: "#d8f8e6",
  200: "#b5f0d0",
  300: "#80e4ab",
  400: "#3bd989",
  500: "#007a40",
  600: "#006b36",
  700: "#00572f",
  800: "#10452b",
  900: "#0d3a24",
  950: "#062919",
}

const fertiterraRed = {
  50: "#fff1f1",
  100: "#ffe0e0",
  200: "#ffc4c4",
  300: "#ff9a9a",
  400: "#ff6c6c",
  500: "#c62828",
  600: "#b4232f",
  700: "#9f1f1f",
  800: "#831b22",
  900: "#64191f",
  950: "#3f1015",
}

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#00bf63',
          'green-dark': '#006b36',
          'green-deep': '#00572f',
          'green-soft': '#f1fff7',
          red: '#ff4242',
          'red-dark': '#c62828',
          'red-soft': '#fff1f1',
        },
        green: fertiterraGreen,
        emerald: fertiterraGreen,
        teal: fertiterraGreen,
        cyan: fertiterraGreen,
        sky: fertiterraGreen,
        blue: fertiterraGreen,
        lime: fertiterraGreen,
        red: fertiterraRed,
        rose: fertiterraRed,
        pink: fertiterraRed,
        fuchsia: fertiterraRed,
        purple: fertiterraRed,
        violet: fertiterraRed,
        indigo: fertiterraRed,
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config

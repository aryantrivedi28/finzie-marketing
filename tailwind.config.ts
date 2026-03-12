import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        cream: {
          DEFAULT: 'var(--cream)',
          dark: 'var(--cream-dark)',
        },
        teal: {
          DEFAULT: 'var(--teal)',
          dark: 'var(--teal-dark)',
        },
        'steel-blue': 'var(--steel-blue)',
        coral: 'var(--coral)',
        night: 'var(--night)',
        carbon: 'var(--carbon)',
        stone: 'var(--stone)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
      },
      animation: {
        'fade-down': 'fadeDown 0.6s ease both',
        'fade-down-delay': 'fadeDown 0.6s 0.1s ease both',
        'dot-glow': 'dotGlow 2.4s infinite',
        'pulse-ring': 'pulseRing 2s infinite',
      },
      keyframes: {
        fadeDown: {
          'from': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        dotGlow: {
          '0%, 100%': {
            boxShadow: '0 0 0 2px rgba(68, 161, 148, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 0 5px rgba(68, 161, 148, 0.08)',
          },
        },
        pulseRing: {
          '0%': {
            boxShadow: '0 0 0 0 rgba(68, 161, 148, 0.4)',
          },
          '70%': {
            boxShadow: '0 0 0 10px rgba(68, 161, 148, 0)',
          },
          '100%': {
            boxShadow: '0 0 0 0 rgba(68, 161, 148, 0)',
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config

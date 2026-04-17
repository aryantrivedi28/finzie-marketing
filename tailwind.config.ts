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
        // Display typeface - Cormorant Garamond for headlines
        display: ['Cormorant Garamond', 'serif'],
        // UI typeface - Jost for body text, navigation, buttons
        body: ['Jost', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
      },
      letterSpacing: {
        '12': '0.12em',
        '16': '0.16em',
        '18': '0.18em',
        '20': '0.2em',
        '24': '0.24em',
        '28': '0.28em',
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
        'typing-dot': 'typingDot 1.4s infinite ease-in-out',
        'ring-pulse': 'ringPulse 4s ease-in-out infinite',
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
        typingDot: {
          '0%, 60%, 100%': {
            transform: 'scale(1)',
            opacity: '0.4',
          },
          '30%': {
            transform: 'scale(1.4)',
            opacity: '1',
          },
        },
        ringPulse: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '0.7',
          },
          '50%': {
            transform: 'scale(1.04)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
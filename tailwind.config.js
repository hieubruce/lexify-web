/** @type {import('tailwindcss').Config} */
// Brand layer = Lexify "Ink & Paper" (see Lexify/docs/_global/UX/brand-direction.md).
// Tokens are static hex here (the marketing site never swaps accents at runtime,
// unlike the extension). Emerald = primary/structure, Coral = reward accent only.
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Fraunces Variable"', 'Fraunces', 'Georgia', 'serif'],
      },
      colors: {
        // Primary — Emerald (CTA, links, focus, structure)
        primary: {
          50: '#ECF6F2',
          100: '#D2EAE1',
          200: '#A9D6C6',
          300: '#7FC1AB',
          400: '#46C39E', // dark-mode text/icon
          500: '#2E8B72',
          600: '#1E6F5C', // PRIMARY
          700: '#155745', // hover
          800: '#0F4438',
          900: '#0A332A',
        },
        // Reward accent — Coral (used sparingly: highlights, milestones)
        coral: {
          50: '#FDEFEC',
          400: '#F08266', // dark-mode
          500: '#E8674C',
          600: '#D2533A',
        },
        // Neutral "giấy & mực" — warm paper + ink
        paper: '#FAF8F3',
        'paper-d': '#1F1F1E',
        surface: '#FFFFFF',
        'surface-d': '#272724',
        ink: '#211E1A',
        'ink-d': '#C3C2B7',
        'ink-muted': '#6B6358',
        'ink-muted-d': '#8C8B82',
        hairline: '#E7E3DA',
        'hairline-d': '#313130',
      },
      maxWidth: {
        content: '1120px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'flip-hint': {
          '0%, 92%, 100%': { transform: 'rotateY(0deg)' },
          '46%': { transform: 'rotateY(12deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

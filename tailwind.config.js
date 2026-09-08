/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#FDFBF7',
          100: '#FAF6EE',
          200: '#F5EFEB',
          300: '#EFE7DC',
          400: '#E2D4C3',
          500: '#D5BEA8',
        },
        saffron: {
          DEFAULT: '#D9531E',
          light: '#EA6B35',
          dark: '#B84112',
          glow: 'rgba(217, 83, 30, 0.25)',
        },
        chili: {
          DEFAULT: '#B91C1C',
          light: '#DC2626',
          dark: '#991B1B',
          glow: 'rgba(185, 28, 28, 0.3)',
        },
        terracotta: {
          DEFAULT: '#2E1C14',
          dark: '#1F1610',
          deep: '#150E0A',
          card: '#3A241A',
          border: '#4A3226',
        },
        turmeric: {
          DEFAULT: '#EAB308',
          light: '#FDE047',
          dark: '#CA8A04',
        },
        coriander: {
          DEFAULT: '#2D5A27',
          light: '#38A169',
          dark: '#1B4332',
        }
      },
      fontFamily: {
        devanagari: ['"Rozha One"', '"Noto Sans Devanagari"', 'serif'],
        devanagariSans: ['"Noto Sans Devanagari"', 'sans-serif'],
        serif: ['"DM Serif Display"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 10px 30px -10px rgba(46, 28, 20, 0.15)',
        'warm-lg': '0 20px 40px -15px rgba(46, 28, 20, 0.25)',
        'saffron': '0 10px 25px -5px rgba(217, 83, 30, 0.4)',
        'chili': '0 10px 30px -5px rgba(185, 28, 28, 0.5)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'steam-1': 'steam 4s ease-out infinite',
        'steam-2': 'steam 5s ease-out infinite 1.5s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(-3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        steam: {
          '0%': { transform: 'translateY(0) scaleX(1)', opacity: '0' },
          '30%': { opacity: '0.6' },
          '60%': { transform: 'translateY(-40px) scaleX(1.3)', opacity: '0.3' },
          '100%': { transform: 'translateY(-80px) scaleX(1.8)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0b0422',
          card: '#150d2e',
          border: 'rgba(255, 255, 255, 0.1)',
        },
        primary: {
          DEFAULT: '#8247FF',
          hover: '#703BF7',
          light: '#A78BFA',
        },
        text: {
          main: '#FFFFFF',
          muted: '#b9b6c6',
          accent: '#C4B5FD',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #8247FF 0%, #6E26D9 100%)',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(130, 71, 255, 0.18) 0%, rgba(11, 4, 34, 0) 50%)',
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(130, 71, 255, 0.5)',
        'glow-lg': '0 0 50px -10px rgba(130, 71, 255, 0.6)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}

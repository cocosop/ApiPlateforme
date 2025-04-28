/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'ping-slow': 'ping-slow 2s infinite',
      },
      keyframes: {
        'ping-slow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.2)', opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
}


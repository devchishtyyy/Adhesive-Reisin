import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#faf7f2',
          100: '#f3ebdd',
          200: '#e9dcc4',
          300: '#deccaa',
          400: '#d3bd92',
          500: '#c8ad7a',
          600: '#a68f63',
          700: '#84724e',
          800: '#62563a',
          900: '#423b29'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.06)'
      },
      borderRadius: {
        xl: '14px'
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
} satisfies Config

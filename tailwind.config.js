
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eaf7fc',
          100: '#d5eff9',
          200: '#aae0f3',
          300: '#82c8e5',
          400: '#59b0d7',
          500: '#3098c9',
          600: '#287da7',
          700: '#206285',
          800: '#184763',
          900: '#102c41',
          DEFAULT: '#82c8e5', // Set default to the main brand blue
        },
        'primary-dark': '#6baac4', // Keep this for specific dark usage if needed, or remove if primary.700 is sufficient
        accent: '#10b981',
        warning: '#f59e0b',
        purple: '#8b5cf6'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [],
};

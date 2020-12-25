const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: [
      './components/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
    ],
    // These options are passed through directly to PurgeCSS
    // https://purgecss.com/configuration.html#options
    options: {
      // safelist: ['bg-red-500', 'px-4'],
    }
  },
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000000',
        white: '#ffffff',
        apple: {
          '50': '#f7fcf7',
          '100': '#eef8ee',
          '200': '#d5eed5',
          '300': '#bbe4bb',
          '400': '#88cf88',
          '500': '#55bb55',
          '600': '#4da84d',
          '700': '#408c40',
          '800': '#337033',
          '900': '#2a5c2a'
        },
        coal: {
          '50': '#f5f5f5',
          '100': '#ebebeb',
          '200': '#cccccc',
          '300': '#adadad',
          '400': '#707070',
          '500': '#333333',
          '600': '#2e2e2e',
          '700': '#262626',
          '800': '#1f1f1f',
          '900': '#191919'
        },
        salmon: {
          '50':  '#fbf7f3',
          '100': '#fceee6',
          '200': '#fad8c9',
          '300': '#f8b89a',
          '400': '#f8895c',
          '500': '#ff755e',
          '600': '#f03c21',
          '700': '#d32d23',
          '800': '#aa2524',
          '900': '#891f20',
        },
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      fill: theme => ({
        apple: {
          50: theme('colors.apple.50'),
        },
        coal: {
          500: theme('colors.coal.500'),
        },
      }),
      zIndex: {
        '-1': '-1',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      opacity: ['dark'],
      fill: ['dark'],
    },
  },
  plugins: [],
}

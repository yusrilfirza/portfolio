module.exports = {
  purge: [
    'src/**/*.js',
    'public/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
        display: ['Open Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
    },
    colors: {
        main: {
            orange: {
                DEFAULT: '#FE9A24',
                hard: '#FF5C00',
                decoration: '#F1B36B'
            },
            grey: {
                DEFAULT: '#343434',
                soft: '#C4C4C4',
                hard: '#888888',
            },
            purple: {
                DEFAULT: '#9D60BA',
            },
            soft_black: {
                DEFAULT: '#383838',
            },
            dark_gray: {
                DEFAULT: '#4D4D4D',
            },
            soft_gray: {
                DEFAULT: '#D4D4D4',
            },
            black: {
                DEFAULT: '#000000',
            },
            white: {
                DEFAULT: '#ffffff',
            }
        },
    },
    boxShadow: {
        xs: '0px 6px 10px rgba(24, 50, 115, 0.06)',
        sm: '0px 6px 10px rgba(24, 50, 115, 0.1)',
        default: '0px 6px 10px rgba(24, 50, 115, 0.2)',
        md: '2px 8px 20px rgba(24, 50, 115, 0.1)',
        lg: '2px 8px 20px rgba(24, 50, 115, 0.2)',
        xl: '2px 8px 25px rgba(24, 50, 115, 0.1)',
        inner: 'inset 2px 8px 25px rgba(24, 50, 115, 0.1)',
        outline: '0 0 0 3px rgba(24, 50, 115, 0.5)',
        thinOutline: '0 0 0 1px rgba(4, 20, 41, 0.8)',
        thin: '0 0 0 1px rgba(24, 50, 115, 1)',
        none: 'none',
        whiteOutline: '0 0 0 2px rgba(255, 255, 255, 0.6)',
    },
    extend: {},
},
  variants: {
    extend: {},
  },
  plugins: [],
}

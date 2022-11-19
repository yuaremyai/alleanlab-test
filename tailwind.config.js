module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      colors: {
        primary: "#3A4562",
        secondary: "#c3c6ce",
        marker: '#384564A1',
        pagination: '#6366f1',
        white: '#ffffff',
        black: '#000000',
        mainBg: '#F5F5F5',
        cardBg: 'EFF0F5',
        buttonBorder : '#0000001f',
        employButton: {
          light: '#a1b1db4d',
          dark: '#55699E'
        },
        mapBg: {
          light: '#2A3047',
          dark: '#202336'
        },
        benefitButton: {
          light: '#FFCF0026',
          dark: '#988B49'
        },
        transparent: 'transparent'
      },
      listStyleType: {
        none: 'none',
        square: 'square',
      },
      screens: {
        'sm': '480px',
      },
      minWidth: {
        '100': '400px',
        'xl': '768px'
      },
      maxWidth: {
        '100': '400px',
        'xl': '768px'
      },
      extend: {
        brightness: {
          35: '.35',
        }
      },
    },
    plugins: [],
  }
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs':'300px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      "2xl": '1680px',
      '3xl': '1920px'
    },
    extend: {
      colors: {
        'primary': '#1fb6ff',
        'secondary': '#7e5bef',
        'tertiary': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'warning': '#ffc82c',
        'gray-dark': '#273444',
        'gray-light': '#d3dce6',
        'error': '#ff1500',
      },
    },
  },
  plugins: [],
}

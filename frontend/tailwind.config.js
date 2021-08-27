module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        height:{
          'h-112':'28rem',
          'h-104':'26rem',
          'h-120':'30rem',
          'h-136':'34rem'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
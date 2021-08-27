module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        height:{
          112:'28rem',
          104:'26rem',
          120:'30rem',
          136:'34rem'
        },
        width:{
          68:"270px"
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
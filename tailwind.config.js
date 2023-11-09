/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-color' : '#E74C3C',
        'fade-color' : 'rgb(252, 234, 232)' ,
        'faded-color' : 'rgb(246, 193, 187)',
        'primary-color' : '#F0F0F0',
        'text-color' : '#4E4949h',
        'header-color' : '#FDFDFDE5'
      },
      margin:{
        'neg-mag' : '-30px' ,
        'negg-mag' : '-50px',
        'negg-mag2' : '-200px',
        'neg-mag2' : '50px',
        'hundred' : '100px'
      },
      height:{
        'h-hundred' : '500px'
      },
      translate :{
        'trans' : '-50%'
      },
      screens : {
        'max-width' : '350px',
        'small' : ' 530px' ,
        'large' : '650px',
        'larger' : '700px', 
        'xlarger' : '750px',
        'extra': "800px",
        'xtra' : '970px',
        'xxl' : '1200px' ,
        'desktop' : '1300px',
        'xl' : '1400px',
        'lg' : '1600px'
      },
      fontSize:{
        'eight-px' : '8px'
      },
      top:{
        'negative' : '-100px'
      }
    },
  },
  plugins: [],
}


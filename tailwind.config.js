/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        brightRed: 'hsl(12,88%,59%)',
        charisBlue : '#219ebc',
        lightCharisBlue: '#8ecae6',
        darkBlue: '#023047',
        veryLightGray: 'hsl(0,0%,98%)'
      },
      backgroundImage: {
        'hero': "url('/images/1666122947 (1).jpg')"
    } 
  },
  plugins: [
  ],
}
}

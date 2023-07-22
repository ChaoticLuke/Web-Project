/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
<<<<<<< HEAD
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        hotsauceorange: '#EB826B',
        pussypeach: '#F4AC84',
        pissgreen: '#C3CAA7',
        mossgreen: '#64A49D',
        moistgreen: '#468484',
        padawongreen: '#3D837B',
      },
=======
        colors: {
          'peachy': '#EB826B',
          'peachylight': '#F4AC84',
          'pissgreen': '#C3CAA7',
          'blueygreen': '#64A49D',
          'mossygreen': '#468484',
          'darkmoss': '#3D837B',
        },
>>>>>>> e368337bab58533bbf1dcb97101585e8ca9e196e
        fontFamily: {
          dm_sans: ["var(--font-DM_Sans)"]
        },
        backgroundImage: { 
          'wave': "url('/public/Wave-main.svg')"
        
        }
      },
    }
  }

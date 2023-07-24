/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        hotsauceorange: '#EB826B',
        peach: '#F4AC84',
        yellowgreen: '#C3CAA7',
        mossgreen: '#64A49D',
        moistgreen: '#468484',
        padawongreen: '#3D837B',
      },
        fontFamily: {
          dm_sans: ["var(--font-DM_Sans)"]
        },
        backgroundImage: { 
          'wave': "url('/public/Wave-main.svg')"
        
        }
      },
    }
  }

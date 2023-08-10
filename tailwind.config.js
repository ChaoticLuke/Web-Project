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
        light: '#363636',
        peach: '#F4AC84',
        lpeach: '#F3C4AA',
        lightgreen: '#D8E8E6',
        mossgreen: '#64A49D',
        lmossgreen: '#66ACA4',
        ltmossgreen: '#76BFB6',
        darkgreen: '#3D837B',
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

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
          'peachy': '#EB826B',
          'peachylight': '#F4AC84',
          'pissgreen': '#C3CAA7',
          'blueygreen': '#64A49D',
          'mossygreen': '#468484',
          'darkmoss': '#3D837B',
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

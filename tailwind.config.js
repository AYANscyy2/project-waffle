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
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        proza: 'var(--ProzaLibre)',
        inter: 'var(--Inter)',
        prompt: 'var(--Prompt)',
        dmsans: 'var(--DM_Sans)',
        satoshi: 'var(--Satoshi)',
        poppins: 'var(--Poppins)',
        geist: 'var(--font-geist-sans)',
        nunito: 'var(--Nunito_Sans)',
      },
      screens: {
        smd: '640px',
        msm: '550px',
        ssm: '430px',
        sm: '400px',
        slg: '1060px',
      },
      boxShadow: {
        custom: '8px 8px 0px 0px #a73157',
      },
    },
  },
  plugins: [],
};

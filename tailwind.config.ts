import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sun': '#fcee21',
        base: {
          DEFAULT: '#3a0ca3',
          100: '#f72585',
          200: '#b5179e',
          300: '#7209b7',
          400: '#560bad',
          500: '#480ca8',
          600: '#3a0ca3',
          700: '#230ca3',
          800: '#040ca3',
          900: '#040c84'
        },
        'fire': '#f72585',
        'earth': '#509724',
        'air': '#fbb03b',
        'water': '#0000ff',
      }

    },
  },
  plugins: [],
}
export default config

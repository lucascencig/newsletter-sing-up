
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      linearGradientColors: {
        'from-to-[#232742]-[#3c4474]': ['#232742', '#3c4474'],
      },

      boxShadow: {
        'custom': '0 4px 6px -1px rgba(35, 39, 116, 0.1), 0 2px 4px -1px rgba(35, 39, 116, 0.06)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans'],
        serif: ['Noto Serif NP Hmong', 'serif'],
        mono: ['Source Code Pro', 'monospace'],


      },
      plugins: [

      ],
      fontFamily: {
        sans: ['Poppins', 'sans'],
        serif: ['Noto Serif NP Hmong', 'serif'],
        mono: ['Source Code Pro', 'monospace'],
      }
    }
  }
}

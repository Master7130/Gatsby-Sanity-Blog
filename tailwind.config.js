module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans-serif': ['Oxygen', 'sans-serif']
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
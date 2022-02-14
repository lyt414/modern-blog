const num = [1, 2, 3, 4, 5, 6, 8, 10, 12]
const whitelist = []
num.map((x) => {
  whitelist.push('translate-x-' + x)
  whitelist.push('-translate-x-' + x)
  whitelist.push('translate-y-' + x)
  whitelist.push('-translate-y-' + x)
})

module.exports = {
  content: [
    "./pages/**/*.jsx",,
    "./components/**/*.jsx",
  ],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  plugins: [],
  options: {
    whitelist,
  }
}

module.exports = {
  content: ["./src/templates/**/*.hbs"],
  theme: {
    extend: {
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked', 'active', 'before'],
      borderColor: ['checked', 'active', 'before', 'focus'],
      ringColor: ['hover', 'active', 'before'],
      textColor:['active'],
    },
  },
  plugins: [],
}
module.exports = {
  purge: {
    content: [
      './index.html',
      './src/**/*.tsx',
    ],
  },
  theme: {
    extend: {
      opacity: {
        10: '0.1',
      },
    },
  },
}

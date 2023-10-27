module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {}, // Configura anidación antes de Tailwind
    tailwindcss: {}, // Tailwind debe estar después de la anidación
    autoprefixer: {},
  },
}

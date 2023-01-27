const withMT = require('@material-tailwind/react/utils/withMT');

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      garage: '#3D4242',
      transparent: 'transparent',
      current: 'currentColor',
      coder: '#dc1f1f',
      cyber: '#fe821e',
      ia: '#1aad8a',
      maker: '#16a1dc',
      virtual: '#1d3dae',
      blockchain: '#ffc233',
    },
  },
  plugins: [],
});

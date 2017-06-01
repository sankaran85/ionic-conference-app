// this is a custom dictionary to make it easy to extend/override
// provide a name for an entry, it can be anything such as 'copyAssets' or 'copyFonts'
// then provide an object with a `src` array of globs and a `dest` string
module.exports = {
  copyPolyfills: {
    src: ['{{ROOT}}/hackz/zone-only-polyfill.js'],
    dest: '{{BUILD}}'
  },
  uglifyHax: {
    src: ['{{ROOT}}/hackz/uglifyjs.js'],
    dest: `{{ROOT}}/node_modules/@ionic/app-scripts/dist/uglifyjs.js`
  }
}
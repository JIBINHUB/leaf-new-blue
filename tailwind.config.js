/** Tailwind build config.
 *
 * Replaces the CDN script, which shipped a compiler to the browser and built
 * the stylesheet on every page load. The content globs below must cover every
 * file that can contain a class name — the scanner reads raw text, so class
 * names inside template literals are found, but a name assembled at runtime
 * would not be. There are none in this codebase; that was checked before
 * making the switch.
 */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Carried over from the inline config the CDN script used.
      fontFamily: {
        sans: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

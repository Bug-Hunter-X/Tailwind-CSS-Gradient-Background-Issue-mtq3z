```javascript
/*Check your Tailwind config file (tailwind.config.js):
Ensure that the theme section is correctly configured:
module.exports = {
  theme: {
    extend: {
      colors: {
        'custom-blue': '#111827',
        'custom-purple': '#64748b' // Example custom colors
      }
    }
  },
  plugins: [],
}
*/

<div class="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500 text-white p-4 rounded-lg shadow-lg">
  <p>This is some text.</p>
</div>
```
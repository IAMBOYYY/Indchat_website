# indchat landing page (static)

```
index.html, reserved.html, 404.html, contact.html, privacy.html, terms.html
css/   tokens (colors, fonts) -> base -> one file per section; motion.css = animations; responsive.css = mobile
js/    config.js (set the waitlist endpoint), site.js (menu, scroll effects), waitlist.js (form), reserved.js, contact.js, workspace-demo.js
assets/ logo.png / logo-light.png (header, light + dark mode), hero-mark*.png (hero), favicon.png
```
Waitlist: set `endpoint` in js/config.js to your API route. Until then, the form only previews the success screen.

# AllerGen UI Business Website

This is a simple static website for AllerGen UI. It is ready to upload to GitHub Pages.

## Files Included

- `index.html` — main website page
- `styles.css` — all website styling
- `script.js` — mobile menu and scroll animation behavior
- `README.md` — setup instructions

## How to Use on GitHub Pages

1. Create a new GitHub repository.
2. Upload all files in this folder to the repository.
3. Go to **Settings**.
4. Go to **Pages**.
5. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. Click **Save**.
7. GitHub will create a public website link after it finishes publishing.

## Important Customization

In `index.html`, find this line:

```html
<a class="button primary" href="mailto:your-email@example.com?subject=AllerGen%20UI%20Demo%20Request">Request a Demo</a>
```

Replace `your-email@example.com` with your real business email address.

You can also update text, pricing, phone number, or links directly in `index.html`.


Updated customizations:
- Business email set to AllerGen.UI@gmail.com
- Top-left brand mark updated to use logo.png
- Hero supporting line updated to the requested wording

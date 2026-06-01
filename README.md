# North Macedonia Students Deedar Fund

A static GitHub Pages informational fundraising proposal page for Ismaili students based at South East European University, North Macedonia, seeking support for travel to Berlin for Deedar on 4 July 2026.

## Files

- `index.html` — page structure and content
- `styles.css` — design, layout, responsive styling
- `script.js` — countdown and cost calculator

## How to publish on GitHub Pages

1. Create a new GitHub repository, for example: `deedar-student-fund`.
2. Upload these files to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Save.
6. GitHub will generate a live website link.

## What to edit

In `index.html`, update:

- Student names and details
- Event time if needed
- Accommodation place and number of nights
- Cost ranges
- Any official language preferred by the fundraising coordinator

In `script.js`, update:

```js
const deedarDate = new Date('2026-07-04T10:00:00+02:00');
```

Use the final confirmed Deedar time if available.

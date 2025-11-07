# SiteGlenda React (Vite + TypeScript + Tailwind)

This is a scaffolded React + TypeScript + Tailwind project created from your existing static site.

Quick start (PowerShell):

```powershell
Set-Location "C:\Users\Pericles\code\siteGlenda-react"
# copy images from the original project into public/images
# e.g. copy-item -Recurse ..\siteGlenda\images .\public\images
npm install
npm run dev
```

Notes:
- Copy your `images/` folder into `public/images` so the app can load logos and photos.
- Production build: `npm run build` then `npm run preview` to test.
- If you want, I can also configure GitHub Actions and deploy to Vercel.

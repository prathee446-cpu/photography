# Photography Website

A static photography portfolio site built with Next.js. Images are served directly from [public/images](public/images) — there is no database or admin panel.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## Updating images

Replace or add files in [public/images](public/images) and update the corresponding paths in:

- [components/public/HeroSection.tsx](components/public/HeroSection.tsx) — homepage hero image
- [components/public/ShowcaseSection.tsx](components/public/ShowcaseSection.tsx) — homepage showcase images
- [components/public/GalleryPreview.tsx](components/public/GalleryPreview.tsx) — homepage gallery preview
- [app/(public)/gallery/page.tsx](app/(public)/gallery/page.tsx) — full gallery page

## Build for production

```bash
npm run build
npm run start
```

## Learn More

To learn more about Next.js, take a look at the [Next.js Documentation](https://nextjs.org/docs).

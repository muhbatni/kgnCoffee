KGN Coffee - Asset Organization Guide
======================================

To run your landing page with local images instead of remote Unsplash URLs, please follow these steps:

1. Create a folder named `public/img` inside the `LandingPage` directory.
2. Copy your logo `kgn.png` from `img/logo/kgn.png` into `LandingPage/public/img/logo.png`.
3. Copy the generated images from your Gemini agent artifacts directory (C:\Users\ibat3\.gemini\antigravity-ide\brain\97f6f549-b5d5-4f28-96ce-4def70487072\) to `LandingPage/public/img/`:
   - `signature_beverage.png` (from `signature_beverage_*.png`)
   - `cafe_ambiance.png` (from `cafe_ambiance_*.png`)
   - `iced_latte.png` (from `iced_latte_*.png`)
   - `almond_croissant.png` (from `almond_croissant_*.png`)

Once these are copied, you can update the image `src` properties in the React components (e.g. Hero.tsx, About.tsx, Menu.tsx) from Unsplash URLs to point to these local `/img/*` files.

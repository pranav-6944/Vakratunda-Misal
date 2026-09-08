# AI_NOTES.md — Vakratunda Misal (वक्रतुंड मिसळ व भेळ) Project Knowledge

## Project Overview
- **Business Name**: Vakratunda Misal (वक्रतुंड मिसळ व भेळ)
- **Tagline**: खाताय ना ? खायलाच पाहीजे ! (Eating, right? You MUST eat it!)
- **Sub-tagline**: चव अशी, की पुन्हा यावंसं वाटेल. (A taste that makes you crave a return)
- **Location**: Alandi Rd, Vishweshwar Nagar, Alandi, Pune, Maharashtra 412105
- **Contact Numbers**: +91 73507 28284 / +91 93253 35952
- **Socials**: @vakratundamisal
- **Hours**: Open Daily 7:00 AM – 10:00 PM
- **Rating**: 4.1 ★ (39+ Google Reviews)

## Core Assets Identified & Live Paths
- `Logo.png` -> `public/Logo.png`: 1008x1058 transparent PNG with 3D embossed terracotta crest, gold/brass rim, chef hat, "वक्रतुंड मिसळ".
- `Images/Misal.png` -> `public/images/Misal.png`: Authentic Vakratunda Misal thali with pav, steel bucket rassa/tarri, usal, farsan, chaas, salad, dahi, gulab jamun.
- `Images/matki-bhel.png` -> `public/images/matki-bhel.png`: Special Matki Bhel with fresh sprouted matki, coriander, lemon, beetroot, cucumber, carrots.
- `Images/Pohe-bhel.png` -> `public/images/Pohe-bhel.png`: Pohe with farsan, green chili, onion, lemon.
- `Images/Chai.png` -> `public/images/Chai.png`: 2 glasses of authentic cutting chai on wooden table.
- `Images/Chai-toast.png` -> `public/images/Chai-toast.png`: Chai and butter toast.
- `Images/Menu.jpg` -> `public/images/Menu.jpg`: Authentic menu board photograph with prices, categories, and Marathi names.
- `favicon_io/*` -> `public/*`: Complete set of apple-touch-icon, android-chrome, favicon.ico, favicon-32x32, favicon-16x16, site.webmanifest.

## Authentic Menu Data (From Menu.jpg Board)
- **मिसळ (Misal)**:
  - स्पे. वक्रतुंड मिसळ (Spe. Vakratunda Misal) — ₹120
  - स्पे. दही मिसळ (Spe. Dahi Misal) — ₹80
  - स्पे. चीझ मिसळ (Spe. Cheese Misal) — ₹90
- **भेळ (Bhel)**:
  - स्पे. मटकी भेळ (Spe. Matki Bhel) — ₹60
  - स्पे. सॅम्पल भेळ (Spe. Sample Bhel) — ₹70
- **पोहे (Pohe)**:
  - स्पे. पोहे (Spe. Pohe) — ₹30
  - तरी पोहे (Tari Pohe) — ₹30
  - दही पोहे (Dahi Pohe) — ₹30
- **भजी (Bhaji / Pakode)**:
  - कांदा भजी (Kanda Bhaji) — ₹40
  - गोल भजी (Gol Bhaji) — ₹30
  - बटाटा भजी (Batata Bhaji) — ₹30
- **मॅगी (Maggi)**:
  - स्पे. प्लेन मॅगी (Spe. Plain Maggi) — ₹40
  - मसाला मॅगी (Masala Maggi) — ₹50
  - चीझ मॅगी (Cheese Maggi) — ₹60
- **उपवासाचे पदार्थ (Upwas Specials)**:
  - साबुदाणा खिचडी (Sabudana Khichdi) — ₹40
  - साबुदाणा वडा (Sabudana Vada) — ₹50
  - फ्रेंच फ्राईज (French Fries) — ₹70
- **चहा / कॉफी (Chai & Coffee)**:
  - स्पे. चहा (Spe. Chai) — ₹15
  - ग्रीन टी (Green Tea) — ₹20
  - ब्लॅक टी (Black Tea) — ₹20
  - अद्रक टी (Adrak Chai) — ₹20
  - स्पे. हॉट कॉफी (Spe. Hot Coffee) — ₹25
  - ब्लॅक कॉफी (Black Coffee) — ₹25
- **पेये व अवांतर (Drinks & Extras)**:
  - ताक (Taak / Spiced Buttermilk) — ₹20
  - सोलकढी (Solkadhi) — ₹30
  - एक्स्ट्रा पाव (Extra Pav - 2 pcs) — ₹15
  - एक्स्ट्रा रस्सा / कट / तरी (Extra Rassa / Kat) — ₹20

## Design Tokens & Palette
- Background: Warm cream / parchment (`#FDFBF7`, `#FAF6EE`, `#F5EFEB`)
- Primary Brand: Deep Saffron (`#E0581B`, `#D9531E`)
- Accent Fire: Chili Red (`#C22718`, `#B91C1C`)
- Secondary: Terracotta Dark Brown (`#2E1C14`, `#3E2723`, `#1F1610`)
- Highlight: Turmeric Gold (`#E5A919`, `#EAB308`)
- Forest/Fresh Herb: Coriander Deep Green (`#1B4332`, `#2D5A27`)
- Typography:
  - Devanagari: `Noto Sans Devanagari`, `Rozha One`, `Yatra One`
  - English Headings: `Playfair Display`, `DM Serif Display`
  - Body & UI: `Inter`, `Manrope`

## Implemented Architecture & Component Map
- `index.html`: SEO meta, LocalBusiness + Restaurant JSON-LD schema, Google Fonts.
- `src/types/index.ts`: TypeScript models for MenuItem, MenuCategory, Review, GalleryItem, IngredientPin.
- `src/data/restaurant.ts`: Contact numbers, address, coordinates, opening hours, social links.
- `src/data/menu.ts`: Full item list matching Menu.jpg with prices, Marathi names, descriptions, spice levels.
- `src/data/reviews.ts`: Authentic 4.1★ reviews (Rohan Raut, Swapnil Kulkarni, Pooja Deshmukh, Mahesh Gunjal, Aniket Shinde).
- `src/data/gallery.ts`: Masonry gallery metadata and 2D misal ingredient pins.
- `src/utils/status.ts`: Real-time IST calculation for Open/Closed badge (7 AM - 10 PM).
- `src/components/layout/Navbar.tsx`: Sticky navbar with live status badge, brand crest, nav links, quick CTA, mobile drawer.
- `src/components/layout/MobileStickyBar.tsx`: Fixed bottom action bar: [📞 Call Direct: 073507 28284] & [📍 Get Directions].
- `src/components/layout/CustomCursor.tsx`: Desktop-only magnetic fluid cursor with interactive text expansion.
- `src/components/layout/Footer.tsx`: Marathi authentic footer, hours, address, phone numbers, copyright.
- `src/components/ui/SteamEffect.tsx`: Animated rising steam particles for hot misal and tea.
- `src/components/sections/Hero.tsx`: Cinematic entrance, steam, slow zoom on thali, floating Marathi words (मिसळ, झणझणीत, तिखट, चव, पुणेरी, अस्सल), Temple proximity badge, WhatsApp order button.
- `src/components/sections/SignatureDish.tsx`: Editorial "01 THE SIGNATURE" layout with authentic thali photo and taste triad.
- `src/components/sections/MisalExplosion.tsx`: 2D interactive ingredient deconstruction (Coriander, Onion, Farsan, Tari/Rassa, Matki, Pav).
- `src/components/sections/SpiceMeter.tsx`: Interactive heat selector (Mild, Medium, Zingy, Kolhapuri Fire) with dynamic heat atmosphere.
- `src/components/sections/MenuExperience.tsx`: Editorial menu with horizontal 450ms slide animations and dynamic dish preview.
- `src/components/sections/ParcelFeature.tsx`: Special leak-proof travel packaging highlight with WhatsApp 1-click pre-order and call actions.
- `src/components/sections/StorySection.tsx`: "From Our Kitchen to Your Plate" Alandi heritage storytelling with 4-phase step breakdown.
- `src/components/sections/FoodGallery.tsx`: Masonry layout with hover zoom and lightbox modal.
- `src/components/sections/CustomerReviews.tsx`: 4.1★ verified reviews showcase.
- `src/components/sections/LocationSection.tsx`: Alandi Rd address, live Open/Closed badge, Sant Dnyaneshwar Maharaj Mandir distance badge, embedded Google Map, WhatsApp order, click-to-call.
- `src/components/sections/FinalCTA.tsx`: "HUNGRY YET? 🌶️ Come get your misal" with steam and spice confetti.
- `src/components/layout/MobileStickyBar.tsx`: 3-button bottom bar: Call Direct (073507 28284), WhatsApp Order, and Alandi Directions.
- `src/App.tsx`: Master layout orchestrating all components.

- `public/images/Dramatic-Rassa-Pour.png`: Cinematic action shot of stainless steel mini-bucket pouring piping-hot red rassa over farsan and matki with steam and buttered pav.
- `public/images/Crispy-Kanda-Bhaji.png`: Irregular, spiky Pune kanda bhaji with blistered fried green chilies and rock salt on brass thali.
- `public/images/Traditional-Spice-Board.png`: Flat-lay of sprouted matki in clay bowl with whole Goda masala spices (stone flower, dry copra, Byadgi chilies).
- `public/images/Chilled-Masala-Taak-Solkadhi.png`: Pair of Masala Taak (churned buttermilk with cumin) and pastel-pink Kokum Solkadhi.
- `public/images/Upwas-Special-Crispy-Sabudana.png`: Authentic fasting brass thali with crispy Sabudana Vada, loose Khichdi, and peanut curd chutney.

## Bespoke Maharashtrian Cultural Icons (`src/components/icons/CulturalIcons.tsx`)
- Handcrafted custom SVG icons replacing generic Google/Material flat icons:
  1. `SamaiDiyaIcon`: Brass temple oil lamp (नंदादीप / समई) representing Sant Dnyaneshwar Maharaj Mandir.
  2. `TariBucketIcon`: Stainless steel mini-bucket with handle and bubbling crimson rassa & steam.
  3. `MaharashtrianChiliIcon`: Curved Lavangi/Bedgi red chili with green calyx and stem.
  4. `SproutedMatkiIcon`: Sprouted moth bean with germination tail and organic leaflet.
  5. `KandaBhajiIcon`: Golden-brown spiky onion fritter with fried green chili.
  6. `SabudanaVadaIcon`: Golden sago fritter with translucent pearls and roasted peanut flecks.
  7. `CuttingChaiIcon`: Traditional 6-fluted Indian cutting chai glass with frothy tea.
  8. `BakeryPavIcon`: Quad of golden baked soft laadi pav with butter glaze lines.
  9. `AlandiTempleIcon`: Alandi temple shikhara with saffron dhwaj flag and golden kalash.
  10. `TaakSolkadhiIcon`: Tall glass of pastel-pink kokum solkadhi with roasted cumin seeds.

- `public/images/Misal1.png`: High-resolution photograph of the authentic Special Vakratunda Misal thali featured in the Signature Dish section (`src/components/sections/SignatureDish.tsx:L29`).
- Real Google Maps Location: `https://maps.app.goo.gl/gSvfajh7hX6fCVAL9`
  - Resolved Location: Vakratunda Misal, Alandi, Pune (Coordinates: `18.6712434, 73.8921604`, Place ID: `0x3bc2c9b5a9392527:0xa159b38c06baecad`)
  - Configured in `src/data/restaurant.ts:L56` (`restaurantInfo.socials.googleMaps`) and embedded directly into `src/components/sections/LocationSection.tsx:L176`.
  - Active links wired across Navbar, Hero, LocationSection, CustomerReviews, FinalCTA, and MobileStickyBar.

## Image Fitting Architecture & Container Preservation
- **Problem Solved**: Images had varying aspect ratios (tall portrait 0.64 `Misal1.png`, square 1.0 `Kanda Bhaji`, wide landscape 1.79 `Traditional Spice Board`), which previously caused `object-cover` to crop edges (e.g. pav, dahi, rassa bucket, or spice board ingredients).
- **Design Preserved**: All container designs (borders, rounded corners, subtle shadows, frames, stamps, badges) were 100% preserved.
- **Implementation Strategy**:
  - Implemented an **ambient blurred backdrop** (`blur-2xl opacity-25-35 scale-110 pointer-events-none`) inside the container so letterbox/pillarbox space seamlessly blends with the natural warm lighting of the photo.
  - Set foreground food photos to `object-contain` (`drop-shadow-md p-2 to p-4`) so 100% of every dish, bowl, pav, and ingredient is visible without any cropping.
  - Docked overlay badges and captions outside the image line-of-sight (e.g., dedicated bottom card dock in `SignatureDish.tsx`, sleek bottom gradients in `FoodGallery.tsx`), preventing text overlays from covering food items.
  - Applied across:
    1. `src/components/sections/SignatureDish.tsx:L27-L55`
    2. `src/components/sections/Hero.tsx:L208-L245`
    3. `src/components/sections/MenuExperience.tsx:L193-L215`
    4. `src/components/sections/FoodGallery.tsx:L38-L75`
    5. `src/components/sections/StorySection.tsx:L80-L115`
    6. `src/components/sections/MisalExplosion.tsx:L36-L45`
    7. `src/components/layout/Navbar.tsx:L77-L82` & `Footer.tsx:L16-L21` (Logo container fit)

## Verification & Status
- **TypeScript**: `npx tsc --noEmit` passed with 0 errors.
- **Production Build**: `npm run build` completed cleanly with 0 errors; bundle generated in `dist/`.
- **Dev Server**: Running at `http://localhost:3000/`.
- **Assets Serving**: Verified `public/images/Misal1.png` (1.54 MB) and all dish photography displayed without cropping.
-   0 9 - 0 8 - 2 0 2 6 :   I n t e g r a t e d   7   n e w   i n t e r a c t i v e   a n a t o m y   i m a g e s   i n t o   M i s a l E x p l o s i o n   c o m p o n e n t   ( A n a t o m y - * . p n g ) .   A d d e d   a   C o m p l e t e   D i s h   b u t t o n   t o   r e s e t   t h e   v i e w   t o   A n a t o m y - A l l . p n g .  
 
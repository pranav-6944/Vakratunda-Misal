import { IngredientPin, GalleryItem } from '../types';

export const misalIngredients: IngredientPin[] = [
  {
    id: 'matki',
    name: 'Sprouted Matki Usal',
    marathiName: 'मोड आलेली मटकी उसळ',
    description: 'Fresh sprouted moth beans slow-simmered with cold-pressed peanut oil, turmeric, mustard seeds, and freshly pounded Maharashtrian goda masala.',
    flavorNote: 'Earthly, nutty & protein-dense foundation',
    icon: 'Bean',
    position: { x: 50, y: 55 },
    image: '/images/Anatomy-Sprouted.png'
  },
  {
    id: 'rassa',
    name: 'Fiery Kat / Tari (Rassa)',
    marathiName: 'झणझणीत कट / तरी',
    description: 'The roaring soul of the dish. Made by roasting coconut, dagad phool (stone flower), roasted onions, and fiery Bedgi & Lavangi chilies simmered for hours.',
    flavorNote: 'Deep crimson, aromatic & sharp heat',
    icon: 'Flame',
    position: { x: 42, y: 22 },
    image: '/images/Anatomy-Fiery.png'
  },
  {
    id: 'farsan',
    name: 'Artisanal Double Farsan',
    marathiName: 'कुरकुरीत फरसाण व शेंगदाणे',
    description: 'A crisp medley of chickpea flour sev, gathiya, papdi, and roasted salted peanuts that provide the signature crunch when drenched in hot rassa.',
    flavorNote: 'Golden crisp crunch & toasted savoriness',
    icon: 'Sparkles',
    position: { x: 74, y: 68 },
    image: '/images/Anatomy-Artisanal.png'
  },
  {
    id: 'onion',
    name: 'Finely Diced Red Onions',
    marathiName: 'बारीक चिरलेला लाल कांदा',
    description: 'Crisp, pungent local onions diced to micro-precision, offering an essential sweet-pungent bite that cuts through the heat.',
    flavorNote: 'Crisp pungency & natural sweetness',
    icon: 'CircleDot',
    position: { x: 32, y: 82 },
    image: '/images/Anatomy-Onion.png'
  },
  {
    id: 'coriander',
    name: 'Fresh Pune Coriander & Lime',
    marathiName: 'हिरवी कोथिंबीर व रसरशीत लिंबू',
    description: 'Handpicked fresh fragrant coriander leaves and a freshly cut lemon wedge to give that essential citrus burst right before your first spoonful.',
    flavorNote: 'Herbal freshness & zesty acidity',
    icon: 'Leaf',
    position: { x: 50, y: 38 },
    image: '/images/Anatomy-Fresh.png'
  },
  {
    id: 'pav',
    name: 'Soft Bakery Pav',
    marathiName: 'मऊ लुसलुशीत लादी पाव',
    description: 'Pillowy fresh bread rolls baked locally every morning, lightly warmed to soak up generous spoonfuls of simmering red tari.',
    flavorNote: 'Velvety, absorbent & comforting sponge',
    icon: 'Utensils',
    position: { x: 28, y: 45 },
    image: '/images/Anatomy-Pav.png'
  },
  {
    id: 'all',
    name: 'Complete Misal Thali',
    marathiName: 'अस्सल मिसळ थाळी',
    description: 'The complete Vakratunda experience. Every element carefully orchestrated to form the perfect harmony of crunch, heat, earthiness, and zest.',
    flavorNote: 'A perfect symphony of textures and flavors',
    icon: 'Sparkles',
    position: { x: 50, y: 90 },
    image: '/images/Anatomy-All.png'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-rassa-pour',
    title: 'The Dramatic Rassa Pour',
    marathiTitle: 'वाफाळलेला झणझणीत कट',
    category: 'Action',
    imageUrl: '/images/Dramatic-Rassa-Pour.png',
    aspect: 'tall',
    caption: 'Piping hot crimson rassa poured from traditional steel handi over sprouted matki and crispy farsan.'
  },
  {
    id: 'gal-1',
    title: 'Maharashtrian Special Misal Thali',
    marathiTitle: 'अस्सल महाराष्ट्रीयन मिसळ थाळी',
    category: 'Misal',
    imageUrl: '/images/Misal.png',
    aspect: 'tall',
    caption: 'Complete feast: Piping hot Misal, fresh pav, tari mini-bucket, curd, salad, and gulab jamun.'
  },
  {
    id: 'gal-bhaji',
    title: 'Crispy Pune Kanda Bhaji',
    marathiTitle: 'गरमागरम कुरकुरीत कांदा भजी',
    category: 'Snacks',
    imageUrl: '/images/Crispy-Kanda-Bhaji.png',
    aspect: 'square',
    caption: 'Irregular crispy onion ribbons served on brass thali with blistered salted green chilies.'
  },
  {
    id: 'gal-upwas',
    title: 'Upwas Special Sabudana Vada & Khichdi',
    marathiTitle: 'उपवास साबुदाणा वडा व खिचडी',
    category: 'Upwas',
    imageUrl: '/images/Upwas-Special-Crispy-Sabudana.png',
    aspect: 'wide',
    caption: 'Golden crispy sago fritters and fluffy khichdi served with sweet-tangy peanut curd chutney.'
  },
  {
    id: 'gal-spices',
    title: 'Goda Masala & Sprouted Matki Flat-lay',
    marathiTitle: 'गोडा मसाला साहित्य व मटकी',
    category: 'Heritage',
    imageUrl: '/images/Traditional-Spice-Board.png',
    aspect: 'wide',
    caption: 'Whole roasted spices, stone flower (dagad phool), dry coconut, Byadgi chilies, and germinated matki.'
  },
  {
    id: 'gal-taak',
    title: 'Chilled Masala Taak & Kokum Solkadhi',
    marathiTitle: 'मसाला ताक व कोकणी सोलकढी',
    category: 'Beverage',
    imageUrl: '/images/Chilled-Masala-Taak-Solkadhi.png',
    aspect: 'square',
    caption: 'Cooling digestive pair: Churned buttermilk with roasted cumin and authentic pink kokum solkadhi.'
  },
  {
    id: 'gal-2',
    title: 'Special Sprouted Matki Bhel',
    marathiTitle: 'ताजी मटकी भेळ',
    category: 'Chaat',
    imageUrl: '/images/matki-bhel.png',
    aspect: 'square',
    caption: 'Loaded with organic sprouted matki, diced beetroots, cucumbers, and sweet-sour tamarind drizzle.'
  },
  {
    id: 'gal-3',
    title: 'Kadak Pune Cutting Chai',
    marathiTitle: 'कडक पुणेरी कटिंग चहा',
    category: 'Beverage',
    imageUrl: '/images/Chai.png',
    aspect: 'tall',
    caption: 'Strong ginger tea brewed slowly in traditional brass vessels, served in authentic cutting glasses.'
  },
  {
    id: 'gal-4',
    title: 'Tari Pohe with Fried Green Chili',
    marathiTitle: 'तरी पोहे आणि तळलेली मिरची',
    category: 'Breakfast',
    imageUrl: '/images/Pohe-bhel.png',
    aspect: 'wide',
    caption: 'Fluffy yellow poha tossed with crunchy peanuts and topped with spicy tari & crisp sev.'
  },
  {
    id: 'gal-6',
    title: 'Authentic Alandi Restaurant Board',
    marathiTitle: 'आमचा अस्सल मेनू फलक',
    category: 'Heritage',
    imageUrl: '/images/Menu.png',
    aspect: 'wide',
    caption: 'Our original branch menu board: "खाताय ना ? खायलाच पाहीजे !" - honest prices and authentic taste.'
  }
];

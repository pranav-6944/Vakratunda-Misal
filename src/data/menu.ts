import { MenuItem, MenuCategory } from '../types';

export const menuCategories: MenuCategory[] = [
  {
    id: 'misal',
    name: 'Misal Specials',
    marathiName: 'मिसळ विशेष',
    iconName: 'Flame',
    description: 'Slow-cooked sprouted matki with fiery aromatic rassa and artisan farsan.'
  },
  {
    id: 'bhel',
    name: 'Chaat & Bhel',
    marathiName: 'भेळ कट्टा',
    iconName: 'Sparkles',
    description: 'Crisp puffed rice blended with sprouted matki, tangy tamarind & fresh herbs.'
  },
  {
    id: 'pohe',
    name: 'Breakfast Pohe',
    marathiName: 'नाश्ता पोहे',
    iconName: 'Sunrise',
    description: 'Authentic Maharashtrian breakfast flattened rice tempered with mustard, curry leaves & peanuts.'
  },
  {
    id: 'bhaji',
    name: 'Crisp Bhaji',
    marathiName: 'गरमागरम भजी',
    iconName: 'Utensils',
    description: 'Golden fried fritters served piping hot with fried green chilies.'
  },
  {
    id: 'maggi',
    name: 'Desi Maggi',
    marathiName: 'मसालेदार मॅगी',
    iconName: 'Soup',
    description: 'Spiced noodle bowls prepared with our special Maharashtrian twist.'
  },
  {
    id: 'upwas',
    name: 'Fasting / Upwas',
    marathiName: 'उपवासाचे पदार्थ',
    iconName: 'Heart',
    description: 'Sacred fasting delicacies cooked purely with sendha namak and ghee/groundnut oil.'
  },
  {
    id: 'chai',
    name: 'Chai & Coffee',
    marathiName: 'चहा / कॉफी',
    iconName: 'Coffee',
    description: 'Aromatic kadak cutting chai brewed with crushed ginger & cardamoms.'
  },
  {
    id: 'extras',
    name: 'Drinks & Extras',
    marathiName: 'थंड पेये व अवांतर',
    iconName: 'GlassWater',
    description: 'Cooling buttermilk, authentic solkadhi, extra pav, and unlimited tari.'
  }
];

export const menuItems: MenuItem[] = [
  // 1. MISAL
  {
    id: 'misal-vakratunda',
    name: 'Special Vakratunda Misal',
    marathiName: 'स्पे. वक्रतुंड मिसळ',
    price: 120,
    category: 'misal',
    description: 'Our crown jewel. Sprouted matki cooked with roasted goda masala, topped with double farsan, diced onions, fresh coriander, paired with fiery rassa and 2 buttered pav.',
    marathiDescription: 'अस्सल घरगुती मसाल्यात शिजवलेली मटकी, कुरकुरीत फरसाण, कांदा-लिंबू आणि झणझणीत कट/तरी.',
    isSignature: true,
    isSpicy: true,
    spiceLevel: 3,
    image: '/images/Special-Vakratunda-Misal.png',
    badge: 'Chef Special',
    isVegetarian: true
  },
  {
    id: 'misal-dahi',
    name: 'Special Dahi Misal',
    marathiName: 'स्पे. दही मिसळ',
    price: 80,
    category: 'misal',
    description: 'The sublime harmony of fiery tari and velvety fresh curd that soothes the heat while enriching the spice.',
    marathiDescription: 'झणझणीत तरीसोबत ताज्या गोडसर दह्याची अप्रतिम जुगलबंदी.',
    spiceLevel: 2,
    image: '/images/Special-Dahi-Misal.png',
    badge: 'Popular',
    isVegetarian: true
  },
  {
    id: 'misal-cheese',
    name: 'Special Cheese Misal',
    marathiName: 'स्पे. चीझ मिसळ',
    price: 90,
    category: 'misal',
    description: 'A contemporary favourite loaded with molten grated cheese cascading over spicy sprouted usal and farsan.',
    marathiDescription: 'गरमागरम तिखट मिसळीवर वितळलेल्या चीझचा भरपूर वर्षाव.',
    spiceLevel: 2,
    image: '/images/Special-Cheese-Misal.png',
    badge: 'Modern Twist',
    isVegetarian: true
  },

  // 2. BHEL
  {
    id: 'bhel-matki',
    name: 'Special Matki Bhel',
    marathiName: 'स्पे. मटकी भेळ',
    price: 60,
    category: 'bhel',
    description: 'A protein-rich signature featuring sprouted matki, crunchy murmure, tomatoes, cucumber, beetroot, raw mango & tangy chutneys.',
    marathiDescription: 'ताजी मोड आलेली मटकी, कुरकुरीत चुरमुरे, काकडी, बीट आणि आंबट-गोड चटणी.',
    image: '/images/Special-Matki-Bhel.png',
    isSignature: true,
    spiceLevel: 2,
    badge: 'Bestseller',
    isVegetarian: true
  },
  {
    id: 'bhel-sample',
    name: 'Special Sample Bhel',
    marathiName: 'स्पे. सॅम्पल भेळ',
    price: 70,
    category: 'bhel',
    description: 'Unique Kolhapuri street fusion where crisp bhel is bathed in a ladle of fiery misal sample/tari.',
    marathiDescription: 'मिसळीच्या तिखट सॅम्पल रश्श्यात भिजवलेली चमचमीत भेळ.',
    image: '/images/Special-Sample-Bhel.png',
    spiceLevel: 3,
    badge: 'Fiery',
    isVegetarian: true
  },

  // 3. POHE
  {
    id: 'pohe-special',
    name: 'Special Kanda Pohe',
    marathiName: 'स्पे. पोहे',
    price: 30,
    category: 'pohe',
    description: 'Traditional Maharashtrian breakfast of soft flattened rice tossed with sauteed onions, mustard seeds, curry leaves, crunchy peanuts & lemon.',
    marathiDescription: 'कांदा, मोहरी, कढीपत्ता आणि शेंगदाण्यांची खमंग फोडणी दिलेले गरमागरम पोहे.',
    image: '/images/Special-Kanda-Pohe.png',
    spiceLevel: 1,
    isVegetarian: true
  },
  {
    id: 'pohe-tari',
    name: 'Tari Pohe (Nagpuri Style)',
    marathiName: 'तरी पोहे',
    price: 30,
    category: 'pohe',
    description: 'Steaming fragrant pohe served drenched in our signature spicy chickpea/matki tari with sliced raw onion.',
    marathiDescription: 'मसालेदार तरीच्या घोटात बुडवलेले झणझणीत पोहे.',
    image: '/images/Tari-Pohe.png',
    spiceLevel: 3,
    badge: 'Local Favourite',
    isVegetarian: true
  },
  {
    id: 'pohe-dahi',
    name: 'Dahi Pohe',
    marathiName: 'दही पोहे',
    price: 30,
    category: 'pohe',
    description: 'Cooling flattened rice folded with fresh whipped dahi and gentle cumin seasoning.',
    marathiDescription: 'थंडगार दही आणि जिऱ्याची सौम्य चव असलेले पोहे.',
    image: '/images/Dahi-Pohe.png',
    spiceLevel: 1,
    isVegetarian: true
  },

  // 4. BHAJI
  {
    id: 'bhaji-kanda',
    name: 'Crispy Kanda Bhaji',
    marathiName: 'कांदा भजी (खेमका / खेकडा)',
    price: 40,
    category: 'bhaji',
    description: 'Thinly sliced onions coated in spiced gram flour and fried to an irresistible golden crunch.',
    marathiDescription: 'पावसाळी आणि हिवाळी संध्याकाळची खरी शान — कुरकुरीत खेकडा कांदा भजी.',
    image: '/images/Crispy-Kanda-Bhaji.png',
    spiceLevel: 2,
    badge: 'Hot & Crisp',
    isVegetarian: true
  },
  {
    id: 'bhaji-gol',
    name: 'Gol Bhaji (Moong/Besan Vada)',
    marathiName: 'गोल भजी',
    price: 30,
    category: 'bhaji',
    description: 'Fluffy round dumplings with a crisp outer crust and seasoned herbal core.',
    marathiDescription: 'बाहेरून कुरकुरीत आणि आतून मऊ अशी पारंपारिक गोल भजी.',
    image: '/images/Gol-Bhaji.png',
    spiceLevel: 1,
    isVegetarian: true
  },
  {
    id: 'bhaji-batata',
    name: 'Batata Bhaji (Potato Fritters)',
    marathiName: 'बटाटा भजी',
    price: 30,
    category: 'bhaji',
    description: 'Thin roundels of potato enveloped in turmeric-infused gram flour batter.',
    marathiDescription: 'हळद-मिरचीच्या बेसनात तळलेले गरम बटाटा काप.',
    image: '/images/Batata-Bhaji.png',
    spiceLevel: 1,
    isVegetarian: true
  },

  // 5. MAGGI
  {
    id: 'maggi-plain',
    name: 'Special Plain Maggi',
    marathiName: 'स्पे. प्लेन मॅगी',
    price: 40,
    category: 'maggi',
    description: 'Quick comforting bowl of noodles cooked to perfection with aromatic tastemaker.',
    spiceLevel: 1,
    isVegetarian: true
  },
  {
    id: 'maggi-masala',
    name: 'Maharashtrian Masala Maggi',
    marathiName: 'मसाला मॅगी',
    price: 50,
    category: 'maggi',
    description: 'Loaded with chopped onions, tomatoes, green chilies and an extra pinch of desi misal spices.',
    image: '/images/Maharashtrian-Masala-Maggi.png',
    spiceLevel: 2,
    badge: 'Desi Hit',
    isVegetarian: true
  },
  {
    id: 'maggi-cheese',
    name: 'Cheese Burst Maggi',
    marathiName: 'चीझ मॅगी',
    price: 60,
    category: 'maggi',
    description: 'Rich velvety cheese melted into hot spiced noodles.',
    image: '/images/Cheese-Burst-Maggi.png',
    spiceLevel: 1,
    isVegetarian: true
  },

  // 6. UPWAS
  {
    id: 'upwas-khichdi',
    name: 'Authentic Sabudana Khichdi',
    marathiName: 'साबुदाणा खिचडी',
    price: 40,
    category: 'upwas',
    description: 'Tender tapioca pearls sauteed with ghee, crushed roasted peanuts, green chilies, and cumin.',
    marathiDescription: 'तुपात भाजलेले शेंगदाणे आणि जिऱ्याची खमंग फोडणी दिलेली मोकळी साबुदाणा खिचडी.',
    image: '/images/Authentic-Sabudana-Khichdi.png',
    spiceLevel: 1,
    badge: 'Upwas Pure',
    isVegetarian: true
  },
  {
    id: 'upwas-vada',
    name: 'Crispy Sabudana Vada (2 pcs)',
    marathiName: 'साबुदाणा वडा',
    price: 50,
    category: 'upwas',
    description: 'Golden crunchy sago patties served with sweetened peanut curd chutney.',
    marathiDescription: 'खमंग कुरकुरीत साबुदाणा वडा आणि गोड शेंगदाणा दही चटणी.',
    image: '/images/Crispy-Sabudana-Vada.png',
    spiceLevel: 1,
    badge: 'Upwas Hit',
    isVegetarian: true
  },
  {
    id: 'upwas-fries',
    name: 'Desi French Fries',
    marathiName: 'फ्रेंच फ्राईज',
    price: 70,
    category: 'upwas',
    description: 'Golden potato fingers salted with rock salt (sendha namak).',
    image: '/images/Desi-French-Fries.png',
    spiceLevel: 1,
    isVegetarian: true
  },

  // 7. CHAI & COFFEE
  {
    id: 'chai-special',
    name: 'Special Cutting Chai',
    marathiName: 'स्पे. चहा (कडक)',
    price: 15,
    category: 'chai',
    description: 'The lifeblood of Pune. Strong tea leaves simmered with whole milk and fragrant spices in authentic cutting glasses.',
    marathiDescription: 'कडक वाफाळलेला अस्सल चहा जो प्रत्येक घोटात तरतरी आणतो.',
    image: '/images/Special-Cutting-Chai.png',
    badge: 'Must Have',
    isVegetarian: true
  },
  {
    id: 'chai-adrak',
    name: 'Adrak Elaichi Chai',
    marathiName: 'अद्रक टी',
    price: 20,
    category: 'chai',
    description: 'Infused with freshly grated ginger root for an invigorating throat warmth.',
    image: '/images/Adrak-Elaichi-Chai.png',
    isVegetarian: true
  },
  {
    id: 'tea-green',
    name: 'Refreshing Green Tea',
    marathiName: 'ग्रीन टी',
    price: 20,
    category: 'chai',
    description: 'Soothing detox cup with mountain green tea leaves.',
    image: '/images/Refreshing-Green-Tea.png',
    isVegetarian: true
  },
  {
    id: 'tea-black',
    name: 'Lemon Black Tea',
    marathiName: 'ब्लॅक टी',
    price: 20,
    category: 'chai',
    description: 'Light, crisp black tea with a squeeze of fresh Pune lemon.',
    image: '/images/Lemon-Black-Tea.png',
    isVegetarian: true
  },
  {
    id: 'coffee-hot',
    name: 'Special Hot Coffee',
    marathiName: 'स्पे. हॉट कॉफी',
    price: 25,
    category: 'chai',
    description: 'Frothy hot coffee whipped with creamy milk and rich roasted beans.',
    image: '/images/Special-Hot-Coffee.png',
    isVegetarian: true
  },
  {
    id: 'coffee-black',
    name: 'Black Coffee',
    marathiName: 'ब्लॅक कॉफी',
    price: 25,
    category: 'chai',
    description: 'Pure bold espresso brew for an instant kick.',
    isVegetarian: true
  },

  // 8. EXTRAS & DRINKS
  {
    id: 'extra-taak',
    name: 'Masala Spiced Taak',
    marathiName: 'ताक (मसाला ताक)',
    price: 20,
    category: 'extras',
    description: 'Traditional churned buttermilk with roasted jeera, rock salt, ginger and coriander to douse the fire.',
    marathiDescription: 'मिसळीची आग शांत करणारे जिरे-कोथिंबीर घातलेले ताजे थंड ताक.',
    image: '/images/Masala-Spiced-Taak.png',
    badge: 'Fire Extinguisher',
    isVegetarian: true
  },
  {
    id: 'extra-solkadhi',
    name: 'Kokum Solkadhi',
    marathiName: 'सोलकढी',
    price: 30,
    category: 'extras',
    description: 'Pink elixir made with fresh coconut milk, tangy kokum, garlic, and green chilies.',
    marathiDescription: 'नारळाचे दूध आणि आगळाची पाचक व स्वादिष्ट कोकणी सोलकढी.',
    image: '/images/Kokum-Solkadhi.png',
    badge: 'Digestive',
    isVegetarian: true
  },
  {
    id: 'extra-pav',
    name: 'Extra Pav Jodi (2 pcs)',
    marathiName: 'एक्स्ट्रा पाव (जोडी)',
    price: 15,
    category: 'extras',
    description: 'Freshly baked soft, pillowy Indian bread straight from the local Alandi bakery.',
    image: '/images/Extra-Pav-Jodi.png',
    isVegetarian: true
  },
  {
    id: 'extra-rassa',
    name: 'Extra Tari / Rassa Wati',
    marathiName: 'एक्स्ट्रा कट / रस्सा',
    price: 20,
    category: 'extras',
    description: 'A piping hot steel mini-bucket of bubbling spicy rassa for true misal lovers.',
    image: '/images/Extra-Tari.png',
    isVegetarian: true
  }
];

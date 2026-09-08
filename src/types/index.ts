export interface MenuItem {
  id: string;
  name: string;
  marathiName: string;
  price: number;
  category: 'misal' | 'bhel' | 'pohe' | 'bhaji' | 'maggi' | 'upwas' | 'chai' | 'extras';
  description: string;
  marathiDescription?: string;
  isSignature?: boolean;
  isSpicy?: boolean;
  spiceLevel?: 1 | 2 | 3 | 4;
  image?: string;
  badge?: string;
  isVegetarian: boolean;
}

export interface MenuCategory {
  id: 'misal' | 'bhel' | 'pohe' | 'bhaji' | 'maggi' | 'upwas' | 'chai' | 'extras';
  name: string;
  marathiName: string;
  iconName: string;
  description: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  marathiSnippet?: string;
  badge?: string;
  source: 'Google Review' | 'Zomato' | 'Local Connoisseur';
}

export interface GalleryItem {
  id: string;
  title: string;
  marathiTitle: string;
  category: string;
  imageUrl: string;
  aspect: 'tall' | 'wide' | 'square';
  caption: string;
}

export interface IngredientPin {
  id: string;
  name: string;
  marathiName: string;
  description: string;
  position: { x: number; y: number }; // percentage coordinates
  flavorNote: string;
  icon: string;
  image?: string;
}

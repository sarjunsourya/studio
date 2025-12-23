import { ChefHat, Flame, Home, Leaf, MapPin, Sparkles, Utensils, GalleryHorizontalEnd, Phone, HandPlatter, LucideIcon } from 'lucide-react';
import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export const navLinks: { href: string; label: string; icon: LucideIcon }[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/menu', label: 'Menu', icon: Utensils },
  { href: '/gallery', label: 'Gallery', icon: GalleryHorizontalEnd },
  { href: '/catering', label: 'Catering', icon: HandPlatter },
  { href: '/contact', label: 'Contact', icon: Phone },
];

export const whyUsPoints = [
  {
    icon: Home,
    title: 'From My Home',
    description: 'Built from passion, heritage, and a love for authentic flavors passed down through generations.',
  },
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'Only the finest and freshest ingredients are chosen to create genuine, heartfelt meals.',
  },
  {
    icon: Sparkles,
    title: 'Hygienic Kitchen',
    description: 'Prepared with the utmost care in a clean, professional home kitchen environment.',
  },
  {
    icon: Flame,
    title: 'Authentic Flavors',
    description: 'Experience the true taste of tradition with recipes refined over 18 years of practice.',
  },
  {
    icon: MapPin,
    title: 'Proudly in Delft',
    description: 'Bringing authentic, heartfelt Indian flavors from my home to our new community in Delft.',
  },
];

const getImage = (id: string): ImagePlaceholder => {
    const img = PlaceHolderImages.find((img) => img.id === id);
    if (!img) {
      // Fallback to a default image if not found
      return {
        id: 'fallback',
        imageUrl: 'https://picsum.photos/seed/fallback/600/400',
        imageHint: 'food',
        description: 'Fallback image',
        category: 'Mixed'
      };
    }
    return img;
  };

export const featuredDishes = [
    {
      id: 4,
      name: 'Plain Dosa',
      description: 'A thin, crispy crepe made from fermented rice and lentil batter.',
      image: getImage('featured-4'),
    },
    {
      id: 5,
      name: 'Pav Bhaji',
      description: 'A spicy vegetable mash served with soft, buttered bread rolls.',
      image: getImage('featured-5'),
    },
     {
      id: 6,
      name: 'Dahi Bhalla',
      description: 'Soft lentil dumplings soaked in creamy yogurt and topped with sweet and tangy chutneys.',
      image: getImage('featured-6'),
    },
    {
      id: 7,
      name: 'Plain Idli',
      description: 'Soft, fluffy steamed rice cakes, a staple of South Indian cuisine.',
      image: getImage('featured-7'),
    },
    {
        id: 8,
        name: 'Masala Puri',
        description: 'A popular Indian street food chaat made with crispy puri, ragda, and spices.',
        image: getImage('featured-8'),
    }
]

export type MenuItem = {
    id: number;
    name: string;
    description: string;
    price: string;
    category: 'Vegetarian' | 'Vegan' | 'South Indian' | 'Tea Cake';
    image: ImagePlaceholder;
  };

export const southIndianMenu: MenuItem[] = [
    {
      id: 101,
      name: 'Idly with Chutney & Sambar',
      description: 'Steamed rice cakes served with coconut chutney and lentil-based vegetable stew.',
      price: '€6,50',
      category: 'South Indian',
      image: getImage('menu-idli'),
    },
    {
      id: 102,
      name: 'Medu Vada with Chutney',
      description: 'Crispy, savory doughnuts made from lentil batter, served with chutney.',
      price: '€3,50',
      category: 'South Indian',
      image: getImage('menu-vada'),
    },
    {
      id: 103,
      name: 'Butter Masala Dosa',
      description: 'A crispy crepe with a savory potato filling, served with chutney and sambar.',
      price: '€10,00',
      category: 'South Indian',
      image: getImage('menu-dosa'),
    },
    {
      id: 104,
      name: 'Appam and Veg Stew',
      description: 'Lacy, soft hoppers served with a fragrant and creamy vegetable stew.',
      price: '€10,00',
      category: 'South Indian',
      image: getImage('menu-appam'),
    },
    {
      id: 105,
      name: 'Bisibelebath with Raita',
      description: 'A flavorful mix of rice, lentils, and vegetables, served with cooling yogurt raita.',
      price: '€8,00',
      category: 'South Indian',
      image: getImage('menu-bisibelebath'),
    },
    {
      id: 106,
      name: 'South Indian Thali',
      description: 'A complete meal with a variety of authentic South Indian dishes.',
      price: '€18,00',
      category: 'South Indian',
      image: getImage('menu-thali'),
    },
  ];
  
  export const teaCakesMenu: MenuItem[] = [
    {
      id: 201,
      name: 'Plain Vanilla',
      description: 'A classic, light, and fluffy vanilla tea cake.',
      price: '€5,50',
      category: 'Tea Cake',
      image: getImage('menu-cake-vanilla'),
    },
    {
      id: 202,
      name: 'Chocolate',
      description: 'A rich and decadent chocolate tea cake for chocolate lovers.',
      price: '€6,50',
      category: 'Tea Cake',
      image: getImage('menu-cake-chocolate'),
    },
    {
      id: 203,
      name: 'Choco Chip',
      description: 'A delightful vanilla cake studded with chocolate chips.',
      price: '€6,50',
      category: 'Tea Cake',
      image: getImage('menu-cake-choco-chip'),
    },
    {
      id: 204,
      name: 'Marble',
      description: 'A beautiful blend of vanilla and chocolate cake swirled together.',
      price: '€6,50',
      category: 'Tea Cake',
      image: getImage('menu-cake-marble'),
    },
    {
      id: 205,
      name: 'Coffee',
      description: 'A fragrant tea cake infused with the rich aroma of coffee.',
      price: '€6,50',
      category: 'Tea Cake',
      image: getImage('menu-cake-coffee'),
    },
     {
      id: 206,
      name: 'Honey',
      description: 'A soft, moist cake sweetened with natural honey.',
      price: '€6,50',
      category: 'Tea Cake',
      image: getImage('menu-cake-honey'),
    },
    {
      id: 207,
      name: 'Carrot Almond',
      description: 'A wholesome tea cake with grated carrots and crunchy almonds.',
      price: '€7,50',
      category: 'Tea Cake',
      image: getImage('menu-cake-carrot'),
    },
    {
      id: 208,
      name: 'Banana Walnut',
      description: 'A classic combination of sweet bananas and toasted walnuts.',
      price: '€7,50',
      category: 'Tea Cake',
      image: getImage('menu-cake-banana'),
    },
  ];

export type InstagramPost = {
  id: string;
  image: ImagePlaceholder;
  caption: string;
  likes: number;
  comments: number;
};

export const instagramPosts: InstagramPost[] = [];

// This is now handled by placeholder-images.json and image-gallery.tsx
// export const galleryImages: ImagePlaceholder[] = [];

import { ChefHat, Flame, Home, Leaf, MapPin, Sparkles } from 'lucide-react';
import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/catering', label: 'Catering' },
  { href: '/contact', label: 'Contact' },
];

export const whyUsPoints = [
  {
    icon: Home,
    title: 'Homemade',
    description: 'Crafted in a real home kitchen with time-tested recipes.',
  },
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'Only the finest and freshest ingredients for authentic taste.',
  },
  {
    icon: Sparkles,
    title: 'Hygienic Preparation',
    description: 'Prepared with the utmost care in a clean, hygienic environment.',
  },
  {
    icon: Flame,
    title: 'Authentic Flavors',
    description: 'Experience the true taste of traditional Indian cuisine.',
  },
  {
    icon: MapPin,
    title: 'Delft-Based',
    description: 'Proudly serving the Delft community with home-cooked meals.',
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
      };
    }
    return img;
  };

export const featuredDishes = [
    {
      id: 1,
      name: 'Paneer Butter Masala',
      description: 'A creamy and rich curry made with succulent paneer in a tomato-based gravy.',
      image: getImage('featured-1'),
    },
    {
      id: 2,
      name: 'Chicken Biryani',
      description: 'Aromatic basmati rice cooked with chicken and a blend of exotic spices.',
      image: getImage('featured-2'),
    },
    {
      id: 3,
      name: 'Samosa Chaat',
      description: 'Crispy samosas crushed and topped with yogurt, chutneys, and spices.',
      image: getImage('featured-3'),
    },
]

export type MenuItem = {
    id: number;
    name: string;
    description: string;
    price: string;
    category: 'Vegetarian' | 'Non-Vegetarian' | 'Vegan';
    image: ImagePlaceholder;
  };

export const weeklyMenu: MenuItem[] = [
    {
      id: 1,
      name: 'Samosa (2 pcs)',
      description: 'Crispy pastry filled with spiced potatoes and peas.',
      price: '€4.50',
      category: 'Vegan',
      image: getImage('menu-1'),
    },
    {
      id: 2,
      name: 'Paneer Butter Masala',
      description: 'Rich and creamy curry with soft paneer cubes.',
      price: '€12.00',
      category: 'Vegetarian',
      image: getImage('menu-2'),
    },
    {
      id: 3,
      name: 'Chicken Biryani',
      description: 'Layered rice and chicken dish, slow-cooked to perfection.',
      price: '€14.50',
      category: 'Non-Vegetarian',
      image: getImage('menu-3'),
    },
    {
      id: 4,
      name: 'Dal Makhani',
      description: 'Creamy black lentils slow-cooked with butter and spices.',
      price: '€10.50',
      category: 'Vegetarian',
      image: getImage('menu-4'),
    },
    {
      id: 5,
      name: 'Aloo Gobi',
      description: 'A classic dry curry with potatoes and cauliflower.',
      price: '€9.50',
      category: 'Vegan',
      image: getImage('menu-5'),
    },
    {
      id: 6,
      name: 'Tandoori Chicken',
      description: 'Chicken marinated in yogurt and spices, cooked in a tandoor.',
      price: '€13.00',
      category: 'Non-Vegetarian',
      image: getImage('menu-6'),
    },
    {
      id: 7,
      name: 'Gulab Jamun (3 pcs)',
      description: 'Soft, spongy balls soaked in sweet, fragrant syrup.',
      price: '€5.00',
      category: 'Vegetarian',
      image: getImage('menu-7'),
    },
    {
      id: 8,
      name: 'Garlic Naan',
      description: 'Soft flatbread with a hint of garlic and butter.',
      price: '€3.00',
      category: 'Vegetarian',
      image: getImage('menu-8'),
    },
  ];
  
export const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

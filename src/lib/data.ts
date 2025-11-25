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
    category: 'Vegetarian' | 'Vegan';
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
  
export type InstagramPost = {
  id: string;
  image: ImagePlaceholder;
  caption: string;
  likes: number;
  comments: number;
};

export const instagramPosts: InstagramPost[] = [
  {
    id: "post1",
    image: getImage('gallery-1'),
    caption: "Behind the scenes! Prepping for a week of delicious meals. 🌿",
    likes: 124,
    comments: 12
  },
  {
    id: "post2",
    image: getImage('gallery-2'),
    caption: "The heart of our kitchen: a symphony of authentic spices.",
    likes: 210,
    comments: 25
  },
  {
    id: "post3",
    image: getImage('featured-5'),
    caption: "Our famous Pav Bhaji, a true taste of home. Order yours today!",
    likes: 180,
    comments: 32
  },
  {
    id: "post4",
    image: getImage('featured-7'),
    caption: "Soft, fluffy Idli fresh from the steamer. The perfect comfort food.",
    likes: 155,
    comments: 18
  },
  {
    id: "post5",
    image: getImage('featured-4'),
    caption: "Crispy, golden Dosa, made with love. A South Indian classic!",
    likes: 230,
    comments: 41
  },
    {
    id: "post6",
    image: getImage('gallery-7'),
    caption: "Sweet endings are the best! Our Gulab Jamun is pure bliss.",
    likes: 198,
    comments: 28
  },
];


export const galleryImages: ImagePlaceholder[] = [];

import { MenuItem, Testimonial } from './types';

export const RESTAURANT_PHONE = "639123456789"; // Example formatted for WhatsApp
export const BUFFET_PRICE = 399; // PHP
export const CURRENCY = "₱";

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Cebu Lechon Belly',
    description: 'Slow-roasted pork belly with crispy skin and tender meat, seasoned with lemongrass and spices.',
    category: 'Main',
    imageUrl: 'https://picsum.photos/id/102/400/300',
    isSpecial: true,
  },
  {
    id: '2',
    name: 'Beef Kare-Kare',
    description: 'Tender beef stew in a rich peanut sauce, served with native vegetables and shrimp paste.',
    category: 'Main',
    imageUrl: 'https://picsum.photos/id/1080/400/300',
  },
  {
    id: '3',
    name: 'Grilled Tuna Panga',
    description: 'Fresh tuna jaw marinated in soy sauce and calamansi, grilled to perfection over charcoal.',
    category: 'Grill',
    imageUrl: 'https://picsum.photos/id/429/400/300',
    isSpecial: true,
  },
  {
    id: '4',
    name: 'Chicken Inasal',
    description: 'Bacolod-style grilled chicken marinated in vinegar, calamansi, lemongrass, and annatto oil.',
    category: 'Grill',
    imageUrl: 'https://picsum.photos/id/431/400/300',
  },
  {
    id: '5',
    name: 'Halo-Halo Special',
    description: 'The ultimate Filipino dessert with shaved ice, evaporated milk, and various sweet ingredients.',
    category: 'Dessert',
    imageUrl: 'https://picsum.photos/id/425/400/300',
  },
  {
    id: '6',
    name: 'Buko Pandan Salad',
    description: 'Young coconut strips and pandan-flavored gelatin mixed with cream and condensed milk.',
    category: 'Dessert',
    imageUrl: 'https://picsum.photos/id/292/400/300',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Maria Santos',
    text: 'Best buffet in Panabo! The Lechon Belly is a must-try. Great value for money.',
    rating: 5,
    source: 'Facebook',
  },
  {
    id: 't2',
    name: 'Juan Dela Cruz',
    text: 'Perfect for family gatherings. The place is clean and the staff are very accommodating.',
    rating: 5,
    source: 'Google',
  },
  {
    id: 't3',
    name: 'Sarah Lim',
    text: 'Love the grilling station. Fresh seafood and meats cooked exactly how you like it.',
    rating: 4,
    source: 'Facebook',
  },
];

export const GALLERY_IMAGES = [
  'https://picsum.photos/id/225/600/400',
  'https://picsum.photos/id/292/600/800', // Portrait
  'https://picsum.photos/id/312/600/400',
  'https://picsum.photos/id/429/600/400',
  'https://picsum.photos/id/395/600/400',
  'https://picsum.photos/id/1060/600/800', // Portrait
];

import { MenuItem, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'AI Barista', href: '#ai-barista' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Morning Brew Blend',
    price: '$3.50',
    description: 'Our signature medium-roast house blend with notes of chocolate and citrus.',
    category: 'Coffee',
    isSpecial: true,
  },
  {
    id: '2',
    name: 'Vanilla Oat Latte',
    price: '$5.25',
    description: 'Creamy oat milk with artisanal vanilla bean syrup and double espresso.',
    category: 'Coffee',
  },
  {
    id: '3',
    name: 'Avocado Toast',
    price: '$12.00',
    description: 'Smashed avocado, chili flakes, radish, and a poached egg on sourdough.',
    category: 'Breakfast',
  },
  {
    id: '4',
    name: 'Belgian Waffles',
    price: '$10.50',
    description: 'Crispy waffles served with seasonal berries and maple syrup.',
    category: 'Breakfast',
  },
  {
    id: '5',
    name: 'Tuscan Chicken Panini',
    price: '$14.00',
    description: 'Grilled chicken, sun-dried tomatoes, pesto, and mozzarella.',
    category: 'Lunch',
  },
  {
    id: '6',
    name: 'Quinoa Power Bowl',
    price: '$13.50',
    description: 'Roasted veggies, chickpeas, kale, and lemon-tahini dressing.',
    category: 'Lunch',
  },
  {
    id: '7',
    name: 'Butter Croissant',
    price: '$4.00',
    description: 'Flaky, buttery layers baked fresh every morning.',
    category: 'Pastries',
  },
  {
    id: '8',
    name: 'Lemon Poppyseed Muffin',
    price: '$3.75',
    description: 'Zesty lemon muffin with a light glaze and poppyseed crunch.',
    category: 'Pastries',
  },
];

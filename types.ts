
export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  category: 'Coffee' | 'Breakfast' | 'Lunch' | 'Pastries';
  isSpecial?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export type Category = 'All' | 'Coffee' | 'Breakfast' | 'Lunch' | 'Pastries';

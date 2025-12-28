export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: 'Main' | 'Grill' | 'Dessert' | 'Drinks';
  imageUrl: string;
  isSpecial?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  source: 'Google' | 'Facebook';
}

export interface ReservationData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
}

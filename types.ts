
export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: 'Apparel' | 'Badges';
}

export interface CartItem extends Product {
  quantity: number;
}

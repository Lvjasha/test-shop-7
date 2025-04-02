import { makeAutoObservable } from 'mobx';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

class ProductStore {
  products: Product[] = [];
  cart: Product[] = [];

  constructor() {
    makeAutoObservable(this);
  }
  setProducts(products: Product[]) {
    this.products = products;
  }
  addToCart(product: Product) {
    this.cart.push(product);
  }
  removeFromCart(id: number) {
    this.cart = this.cart.filter((item) => item.id !== id);
  }
}

export const productStore = new ProductStore();

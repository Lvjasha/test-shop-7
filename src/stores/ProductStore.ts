import { makeAutoObservable } from 'mobx';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
}

class ProductStore {
  products: Product[] = [];
  cart: Product[] = [];
  //   cost: number | null = 0
  //   quantity: number | null = 0;

  constructor() {
    makeAutoObservable(this);
    // Загружаем продукты из localStorage при инициализации
    this.loadProducts();
    // Загружаем корзину при инициализации
    this.loadCart();
  }

  loadProducts() {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      // Загружаем продукты из localStorage
      this.products = JSON.parse(storedProducts);
    }
  }

  loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        this.cart = JSON.parse(storedCart);
      } catch (error) {
        console.error('Ошбика при загрузке корзины:', error);
        this.cart = []; // В случае ошибки, устанавливаем пустую корзину
      }
    } else {
      this.cart = []; // Устанавливаем пустую корзину, если ничего нет
    }
  }

  setProducts(products: Product[]) {
    // Устанавливаем новые продукты
    this.products = products;
    // Сохраняем их в localStorage
    localStorage.setItem('products', JSON.stringify(products));
  }

  setCart(cart: Product[]) {
    this.cart = cart;
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  addToCart(product: Product, quantity: number = 1) {
    const itemIndex = this.cart.findIndex((value) => value.id === product.id);
    // Если товара нет в корзине (индекс меньше 0), создаем новый объект товара с указанным количеством
    if (itemIndex < 0) {
      // Если товара еще нет в корзине
      const newCartItem = {
        ...product,
        quantity: quantity,
      };
      this.setCart([...this.cart, newCartItem]);
    } else {
      // Добавляем новый товар в массив cartItems
      const updatedCartItem = {
        ...this.cart[itemIndex],
        quantity: this.cart[itemIndex].quantity + quantity,
      };
      const newCart = this.cart.slice(); // Создаем копию массива
      newCart.splice(itemIndex, 1, updatedCartItem); // Обновляем элемент
      this.setCart(newCart);
    }

    // this.cart.push(product);
    localStorage.setItem('product', JSON.stringify(product));
  }

  removeFromCart(id: number) {
    // написать вычитание из несокльких одинаковых товаров одного

    //Фильтруем массив cartItems, оставляя только те товары, которые не совпадают с id, и обновляем состояние.
    this.cart = this.cart.filter((item) => item.id !== id);

    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}

export const productStore = new ProductStore();

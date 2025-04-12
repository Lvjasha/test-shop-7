// import { ShoppingCartOutlined } from '@ant-design/icons';
import { makeAutoObservable } from 'mobx';
import type { MenuProps } from 'antd';
// import CartIcon from '../components/CartIcon';

export interface NavBar {
  activePage: string;
}

type MenuItem = Required<MenuProps>['items'][number];

class NavigationStore {
  activePage: string = '/';
  current: string = '/cart';
  // history= useNavigate();

  items: MenuItem[] = [
    {
      label: 'Shop',
      key: '/',
      icon: null,
      // onClick: () => {}, // Переход на главную страницу
    },
    {
      label: 'Cart',
      key: '/cart',
      // icon: <CartIcon />,
      // onClick: () => {}, // Переход на страницу корзины
      disabled: false,
    },
  ];

  constructor() {
    makeAutoObservable(this);
    this.loadActivePage();
  }

  setActivePage(key: string) {
    this.activePage = key;
    localStorage.setItem('activePage', key); // Сохраняем активную страницу
  }

  loadActivePage() {
    const savedPage = localStorage.getItem('activePage');
    if (savedPage) {
      this.activePage = savedPage; // Восстанавливаем активную страницу
    }
  }

  // handleNavigation = (page: string) => {
  //   navigationStore.setActivePage(page); // Устанавливаем активную страницу
  //   this.history(`/${page}`); // Переход на новую страницу
  // };

  setCurrent(key: string) {
    this.current = key;
  }

  onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    this.setCurrent(e.key);
  };
}

export const navigationStore = new NavigationStore();

import { makeAutoObservable } from 'mobx';

export interface NavBar {
  activePage: string;
}

class NavigationStore {
  activePage: string = '/';

  constructor() {
    makeAutoObservable(this);
    this.loadActivePage();
  }

  setActivePage(page: string) {
    this.activePage = page;
    localStorage.setItem('activePage', page); // Сохраняем активную страницу
  }

  loadActivePage() {
    const savedPage = localStorage.getItem('activePage');
    if (savedPage) {
      this.activePage = savedPage; // Восстанавливаем активную страницу
    }
  }
}

export const navigationStore = new NavigationStore();

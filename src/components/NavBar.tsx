import { observer } from 'mobx-react-lite';
import { Link, useNavigate } from 'react-router-dom';
import { navigationStore } from '../stores/NavigationStore';
import CartIcon from './CartIcon';

const NavBar = observer(() => {
  const history = useNavigate();

  const handleNavigation = (page: string) => {
    navigationStore.setActivePage(page); // Устанавливаем активную страницу
    history(`/${page}`); // Переход на новую страницу
  };

  return (
    <header>
      <div>
        <nav>
          <Link
            className="container d-flex justify-content-between"
            onClick={() => handleNavigation(navigationStore.activePage)}
            to="/"
            // style={{
            //   backgroundColor:
            //     navigationStore.activePage === '' ? 'lightblue' : 'transparent',
            // }}
          >
            Shop
          </Link>
          {/* <Link
            className="container d-flex justify-content-between"
            onClick={() =>
              handleNavigation(navigationStore.activePage + 'cart/')
            }
            to="/cart"
            // style={{
            //   backgroundColor:
            //     navigationStore.activePage === '/cart'
            //       ? 'lightblue'
            //       : 'transparent',
            // }}
          >
            Cart
          </Link> */}
          <Link
            className="container d-flex justify-content-between"
            onClick={() => handleNavigation('cart/')}
            to={navigationStore + 'cart/'}
          >
            <CartIcon />
          </Link>
        </nav>
      </div>
    </header>
  );
});

export default NavBar;

import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { navigationStore } from '../stores/NavigationStore';

import { Menu, MenuProps } from 'antd';
// import CartIcon from './CartIcon';

const NavBar = observer(() => {
  const history = useNavigate();

  const handleNavigation = (page: string) => {
    navigationStore.setActivePage(page);
    history(page);
  };

  return (
    <header>
      <div className="text-white bg-dark py-2">
        <Menu mode="horizontal" theme="dark">
          {navigationStore.items && navigationStore.items.length > 0 ? (
            navigationStore.items.map(
              (item: MenuProps['items'][number]) =>
                item ? ( // Проверка на null или undefined
                  <Menu.Item
                    key={item.key}
                    onClick={() => handleNavigation(item.key)} // Передаем функцию навигации
                    style={{
                      backgroundColor:
                        navigationStore.activePage === item.key
                          ? 'lightblue'
                          : 'transparent',
                    }}
                    icon={item.icon}
                  >
                    {/* <CartIcon /> */}
                    {item.label}
                  </Menu.Item>
                ) : null // В случае, если item равен null, просто возвращаем null
            )
          ) : (
            <Menu.Item disabled>No items available</Menu.Item> // Обработка случая, когда items пустые
          )}
        </Menu>
      </div>
    </header>
  );
});

export default NavBar;

import { List } from 'antd';
import { observer } from 'mobx-react-lite';
import { productStore } from '../stores/ProductStore';
import CartItem from '../components/CartItem';

const Cart = observer(() => {
  return (
    <main className="container">
      <List
        itemLayout="horizontal"
        dataSource={productStore.cart}
        renderItem={(item) => (
          <CartItem
            item={item}
            onRemove={() => productStore.removeFromCart(item.id)}
          />
        )}
      />
      <table>
        <thead>
          <tr>
            <th>Наименование</th>
            <th>Количество</th>
            <th>Цена</th>
            <th>Сумма</th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tbody>
          {/* {productStore.cart.map((item) => (
            <CartItem
              key={item.id}
              {...item}
              removeFromCart={productStore.removeFromCart}
            />
          ))} */}
          <tr>
            <th>Итого:</th>
            <th></th>
          </tr>
        </tbody>
      </table>
    </main>
  );
});

export default Cart;

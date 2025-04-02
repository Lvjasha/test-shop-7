import { List } from 'antd';
import { observer } from 'mobx-react-lite';
import { productStore } from '../stores/ProductStore';
import CartItem from '../components/CartItem';

const Cart = observer(() => (
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
));
export default Cart;

import { observer } from 'mobx-react-lite';
import { productStore } from '../stores/ProductStore';
import Icon, { ShoppingCartOutlined } from '@ant-design/icons';

const CartIcon = observer(() => {
  return (
    //onClick={} проставить путь в корзину
    // <div className="cart-icon">
    <div>
      <Icon component={ShoppingCartOutlined} />
      {productStore.cart.length ? (
        <span>{productStore.cart.length}</span>
      ) : null}
    </div>
  );
});
export default CartIcon;

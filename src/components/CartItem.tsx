import { Product } from '../stores/ProductStore';
import { Button, List } from 'antd';

interface Props {
  item: Product;
  onRemove: () => void;
}

const CartItem = ({ item, onRemove }: Props) => (
  <List.Item
    actions={[
      <Button danger onClick={onRemove}>
        Remove
      </Button>,
    ]}
  >
    <List.Item.Meta
      avatar={<img src={item.image} style={{ height: 60 }} />}
      title={item.title}
      description={item.price}
    />
  </List.Item>
);

export default CartItem;

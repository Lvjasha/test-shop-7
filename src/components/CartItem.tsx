import { observer } from 'mobx-react-lite';
import { Product } from '../stores/ProductStore';
import { Button } from 'antd';
import './CartItem.css';

interface Props {
  item: Product;
  onRemove: () => void;
}

const CartItem = observer(({ item, onRemove }: Props) => (
  // <List.Item
  //   actions={[
  //     <Button danger onClick={onRemove}>
  //       Remove
  //     </Button>,
  //   ]}
  // >
  //   <List.Item.Meta
  //     avatar={<img src={item.image} style={{ height: 60 }} />}
  //     title={item.title}
  //     description={item.price}
  //   />
  // </List.Item>
  <tr className="row">
    <td className="row">
      <strong>{item.title}</strong>
    </td>
    <td className="row">{item.quantity}</td>
    <td className="row">{item.price}</td>

    <td className="row">{item.price * item.quantity}</td>
    <td>
      <Button danger onClick={onRemove}>
        Remove
      </Button>
    </td>
  </tr>
));

export default CartItem;

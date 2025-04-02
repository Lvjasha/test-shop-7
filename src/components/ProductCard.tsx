import { observer } from 'mobx-react-lite';
import { Product } from '../stores/ProductStore';
import { Button, Card } from 'antd';

interface Props {
  product: Product;
  onAdd: () => void;
}

const ProductCard = observer(({ product, onAdd }: Props) => (
  <Card
    title={product.title}
    cover={
      <img
        alt={product.title}
        src={product.image}
        style={{ height: 200, objectFit: 'contain' }}
      />
    }
    style={{ width: 300, margin: 10 }}
  >
    <p>{product.description.slice(0, 100)}...</p>
    <p>
      <strong>${product.price}</strong>
    </p>
    <Button type="primary" onClick={onAdd}>
      Add to Cart
    </Button>
  </Card>
));

export default ProductCard;

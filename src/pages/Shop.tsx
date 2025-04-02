import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { fetchProducts } from '../api/products';
import { productStore } from '../stores/ProductStore';
import { Col, Row } from 'antd';
import ProductCard from '../components/ProductCard';

const Shop = observer(() => {
  console.log(productStore.products);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        productStore.setProducts(data.products);
      } catch (error) {
        console.error('Ошибка при загрузке продуктов:', error);
      }
    };
    // fetchProducts().then(productStore.setProducts.bind(productStore));
    loadProducts();
  }, []);

  return (
    <Row gutter={[16, 16]} justify="center">
      {Array.isArray(productStore.products) &&
        productStore.products.map((product) => (
          <Col key={product.id}>
            <ProductCard
              product={product}
              onAdd={() => productStore.addToCart(product)}
            />
          </Col>
        ))}
    </Row>
  );
});

export default Shop;

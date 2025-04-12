export const fetchProducts = async () => {
  const res = await fetch('https://fakestoreapi.in/api/products');
  const data = await res.json();
  console.log('Данные из API:', data);
  return data;
};
// https://test-frontend.dev.int.perx.ru/api/goods/

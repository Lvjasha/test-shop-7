import { Layout } from 'antd';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import NavBar from './components/NavBar';

const { Header, Content } = Layout;

function App() {
  // const menuItems = [
  //   {
  //     key: 'shop',
  //     label: <Link to="/">Shop</Link>,
  //   },
  //   {
  //     key: 'cart',
  //     label: <Link to="/cart">Cart</Link>,
  //   },
  // ];
  return (
    <Router>
      <Layout>
        <Header>
          {/* <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['shop']}
            items={menuItems}
          ></Menu> */}
          <NavBar />
        </Header>
        <Content style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;

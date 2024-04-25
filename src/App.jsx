import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Cart/Cart';
import Homepage from './Homepage/Homepage';
import NavBar from './NavBar/NavBar';
import Shop from './Shop/Shop';

function App({ page }) {
  const [itemList, setItemList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (loading) {
      fetch('https://fakestoreapi.com/products', { mode: 'cors' })
        .then((res) => {
          if (res.status >= 400) {
            throw new Error('server error');
          }
          return res.json();
        })
        .then((res) => setItemList(res))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  }, [loading]);

  console.log(itemList);

  return (
    <>
      <NavBar />
      {page === 'homepage' ? (
        <Homepage />
      ) : page === 'shop' ? (
        <Shop
          itemList={itemList}
          error={error}
          loading={loading}
          cart={cart}
          setCart={setCart}
        />
      ) : (
        <Cart cart={cart} setCart={setCart} />
      )}
    </>
  );
}

export default App;

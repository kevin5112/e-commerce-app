/* eslint-disable react/jsx-key */
import NavBar from '../NavBar/NavBar';
import './Cart.css';

export default function Cart({ cart, setCart }) {
  console.log(cart);
  return (
    <>
      <div>hello cart</div>
      <div className="cart">
        {cart.map((item) => {
          return (
            <div className="cart-item">
              <div>{item.title}</div>
              <div>${item.price}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

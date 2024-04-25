import './Card.css';

export default function Card({ item, cart, setCart }) {
  function handleClick(e) {
    e.preventDefault();

    // I'm a dumbass.. just use the current item and add it to cart..
    // console.log(e.target.parentNode.parentNode.children[1].textContent);
    // console.log(item);

    setCart([...cart, item]);
  }

  return (
    // <div>
    //   <h2>{item.title}</h2>
    //   <img src={item.image} alt="" />
    // </div>

    <div className="card">
      <img src={item.image} alt="" />
      <h2 className="item-title">{item.title}</h2>
      <div className="bottom-row">
        <button className="add-cart-btn" onClick={handleClick}>
          Add to Cart
        </button>
        <p className="item-price">${item.price}</p>
      </div>
    </div>
  );
}

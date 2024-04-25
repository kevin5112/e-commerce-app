import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Card from '../Card/Card';
import PopUp from '../PopUp/PopUp';
import './Shop.css';

export default function Shop({ loading, itemList, error, cart, setCart }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [popupName, setPopupName] = useState('');
  const [isItemSelected, setIsItemSelected] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const showPopupHandler = () => setShowPopUp(true);

  // console.log(selectedItem);
  console.log(cart);

  useEffect(() => {
    if (selectedItem) {
      setIsItemSelected(true);
    } else {
      setIsItemSelected(false);
    }
  }, [selectedItem]);

  function handleClick(e) {
    e.preventDefault();
    let newString = e.currentTarget.children[0].children[1].textContent;
    if (e.target.className === 'add-cart-btn') {
      setPopupName(newString);
      showPopupHandler();
    } else {
      // get index and then slice off the price tag from the string
      // let index = e.currentTarget.textContent.indexOf('$');
      // let newString = e.currentTarget.textContent.slice(0, index);

      // OR just get the title directly..
      // console.log(e.currentTarget.children[0].children[1].textContent);
      // console.log(newString);

      setSelectedItem(
        itemList.find((item) => {
          return item.title === newString ? item : null;
        })
      );
      setIsItemSelected(true);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopUp(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [showPopUp]);

  let popup = null;
  if (showPopUp) {
    popup = <PopUp popupName={popupName} />;
  }

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;
  return isItemSelected ? (
    <>
      <Navigate to={`${selectedItem.id}`} state={selectedItem} />
    </>
  ) : (
    itemList && (
      <>
        {popup}
        <div className="card-list">
          {itemList.map((item) => {
            return (
              <div key={item.id} onClick={handleClick}>
                <Card item={item} cart={cart} setCart={setCart} />
              </div>
            );
          })}
        </div>
      </>
    )
  );
}

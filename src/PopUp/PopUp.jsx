import './PopUp.css';

export default function PopUp({ popupName }) {
  return (
    <div className="toast">
      <div className="message">
        <span>{popupName} added to cart</span>
      </div>
      <div className="progress"></div>
    </div>
  );
}

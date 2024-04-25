import { Link, useLocation, useParams } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './Item.css';

export default function Item() {
  const { id } = useParams();
  const { state } = useLocation();
  // console.log(`id: ${id}`);

  // console.log('state:', state);

  return (
    <>
      <NavBar />
      <div className="item">
        <h1>{state.title}</h1>
        <img src={state.image} alt="" />
        <div className="item-text">
          <p className="rating">Category: {state.category}</p>
          <p className="rating">Rating: {state.rating.rate}</p>
          <p className="rating">Rating Count: {state.rating.count}</p>
          <h2>Description</h2>
          <p className="description">{state.description}</p>
        </div>
      </div>

      {/* <Link to="/">You can go back to the home page by clicking here!</Link> */}
    </>
  );
}

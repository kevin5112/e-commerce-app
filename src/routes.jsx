import App from './App';
import ErrorPage from './ErrorPage';
import Item from './Item/Item';
import Shop from './Shop/Shop';

const routes = [
  {
    path: '/',
    element: <App page="homepage" />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'shop',
    element: <App page="shop" />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'cart',
    element: <App page="cart" />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'shop/:id',
    element: <Item />,
    errorElement: <ErrorPage />,
  },
];

export default routes;

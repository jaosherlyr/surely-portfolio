import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/Home';
import Works from '../pages/Works';
import Profile from '../pages/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'works', element: <Works /> },
      { path: 'profile', element: <Profile /> },
    ],
  },
]);

export default router;
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import InitialPage from './Pages/InitialPage';

const router: RouteObject[] = [
  {
    path: '/',
    Component: InitialPage,
  },
];

export default createBrowserRouter(router);

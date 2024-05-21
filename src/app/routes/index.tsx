import { createHashRouter, RouterProvider } from 'react-router-dom';
import { PrivateOutlet } from '../ui/privateOutlet/PrivateOutlet';
import { Login } from '../../pages';
import { Table } from '../../entities/data-table/ui/table';

const router = createHashRouter([
  {
    path: '/',
    element: <PrivateOutlet />,
    children: [
      {
        path: '/data',
        element: <Table />
      }
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
] );

export const Provider = () => {
 return <RouterProvider router={router} />
}


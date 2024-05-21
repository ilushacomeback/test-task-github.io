import { Provider as RouterProvider} from './routes';
import { Provider } from 'react-redux';
import { NavBar } from '../widgets';
import { store } from './model';

export const App = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <RouterProvider />
    </Provider>
  );
};

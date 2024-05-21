import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

export const PrivateOutlet = () => {
  const token = useAppSelector((state) => state.authReducer.token)
  return token ? <Outlet /> : <Navigate to="/login" />;
};

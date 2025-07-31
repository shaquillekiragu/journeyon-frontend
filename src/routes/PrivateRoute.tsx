import { type FC, type JSX, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { DataContext } from '../contexts/DataContextObject';

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useContext(DataContext);
  return user
    ? children
    : <Navigate to="/login" replace />;
};

export default PrivateRoute;
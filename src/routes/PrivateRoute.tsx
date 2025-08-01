import { type FC, type JSX, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { DataContext } from '../contexts/DataContextObject';

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: FC<PrivateRouteProps> = ( { children } ) => {
  const { user, isInitialized } = useContext( DataContext );
  
  if ( !isInitialized ) {
    return null;
  }

  return user === null
    ? < Navigate to="/login" replace />
    : children;
};

export default PrivateRoute;
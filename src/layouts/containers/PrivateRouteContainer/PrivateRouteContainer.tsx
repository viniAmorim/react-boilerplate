import React from 'react';
import { Navigate } from 'react-router-dom';

import { getUserLocalStorage } from '~/layouts/contexts/AuthProvider/utils';

const PrivateRouteContainer = ({
  children,
  redirectTo,
}: {
  children: JSX.Element;
  redirectTo: string;
}) => {
  const isAuthenticated = getUserLocalStorage();

  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

export default PrivateRouteContainer;

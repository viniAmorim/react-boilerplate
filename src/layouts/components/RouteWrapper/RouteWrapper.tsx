import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { PrivateRouteContainer } from '~/layouts/containers';

function RouteWrapper({
  component: Component,
  isProtectedLayout = false,
}: {
  component: React.LazyExoticComponent<() => JSX.Element>;
  isProtectedLayout?: boolean;
}) {
  const location = useLocation();

  const pagesTitle = {
    '/': 'Login',
  };

  const club = 'Clube de vantagens';

  const title = club
    ? `${club} | ${pagesTitle[location.pathname]}`
    : pagesTitle[location.pathname];

  useEffect(() => {
    document.title = title;
  }, [club, location, title]);

  if (isProtectedLayout) {
    return (
      <PrivateRouteContainer redirectTo="/">
        <Component />
      </PrivateRouteContainer>
    );
  }

  return <Component />;
}

export default RouteWrapper;

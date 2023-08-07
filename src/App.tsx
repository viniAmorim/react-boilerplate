import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { RouteWrapper } from './layouts/components/RouteWrapper';

const LoginContainer = lazy(
  () => import('src/layouts/containers/LoginContainer/LoginContainer'),
);

function App() {
  return (
    <Suspense fallback="Carregando...">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RouteWrapper
                isProtectedLayout={false}
                component={LoginContainer}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

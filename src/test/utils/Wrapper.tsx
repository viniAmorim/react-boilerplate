import React, { ReactNode } from 'react';

const Providers = ({ children }: { children: ReactNode }) => {
  //inserir aqui futuros providers dos testes, <ThemeProvider>, <MemoryRouter>...
  return <>{children}</>;
};

export default Providers;

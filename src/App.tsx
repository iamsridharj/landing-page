import React, { Suspense, lazy } from 'react';
import { Header } from '@botbrews/components';
import { ThemeContext, createGlobalStyle } from 'styled-components';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { useTheme } from 'src/hooks/ui/useTheme';

const Home = lazy(() => import('src/pages/Home/HomePage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <h1>Something went wrong</h1>,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
    errorElement: <h1>Something went wrong</h1>,
  },
]);

const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}
`;

export default function App(): React.JSX.Element {
  const theme = useTheme();

  return (
    <ThemeContext.Provider value={theme}>
      <GlobalStyles />
      <Header />
      <Suspense fallback="Loading...">
        <RouterProvider router={router} />
      </Suspense>
    </ThemeContext.Provider>
  );
}

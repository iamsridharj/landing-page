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
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

html,
body {
    padding: 0;
    margin: 0;
    min-height:100vh;
    background: #0f0c29; /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #0f0c29, #302b63, #24243e); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #0f0c29, #302b63, #24243e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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

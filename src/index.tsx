import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
// import ContextProvider from './context';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NotificationsProvider } from '@mantine/notifications';
import { ThemeProvider } from '@material-tailwind/react';
// import { ColumnProvider } from './context/column_context';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60,
      keepPreviousData: true,
      refetchOnReconnect: true,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <NotificationsProvider limit={1} position='top-right'>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </NotificationsProvider>
      </MantineProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

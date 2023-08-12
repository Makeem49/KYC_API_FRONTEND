import "./index.css";
import "./App.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";

// import ContextProvider from './context';
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

import { router } from "./context/routes";
import { ThemeProvider, useThemeCtx } from "./context/theme_context";
// import { ThemeProvider } from '@material-tailwind/react';

import reportWebVitals from "./reportWebVitals";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60,
      keepPreviousData: true,
      refetchOnReconnect: true,
    },
  },
});

function App() {
  const { theme } = useThemeCtx();

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: theme }}
    >
      <NotificationsProvider limit={1} position="top-right">
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </NotificationsProvider>
    </MantineProvider>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Loading from './components/Loader/Loading';
import NotFound from './components/not-found/NotFound';
import { routeTree } from './routeTree.gen';

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => <NotFound />,
  defaultPendingComponent: () => <Loading />,
  defaultErrorComponent: ({ error }) => (
    <NotFound message={`An error occurred: ${error.message}`} />
  ),
  context: {
    queryClient, // Provide the QueryClient instance to the router context
  },
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools buttonPosition='bottom-right' />
    </QueryClientProvider>
  </StrictMode>,
);

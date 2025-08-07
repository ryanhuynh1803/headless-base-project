import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ApolloProvider } from '@apollo/client';
import { queryClient } from '@/lib/react-query';
import { client } from '@/lib/apollo-client';
import App from './App';
import './globals.css';

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </QueryClientProvider>
);
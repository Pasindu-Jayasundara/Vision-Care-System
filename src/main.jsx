import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { StrictMode } from 'react';
import { ApolloProvider } from "@apollo/client/react";

import App from './App.jsx';
import './main.css';
import apolloSupabaseGraphqlClient from './client/supabase-grphql-apollo.client.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={apolloSupabaseGraphqlClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>
);

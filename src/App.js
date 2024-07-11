import React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Cat } from "./Cat";
import './App.css';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Cat />
        </div>
      </QueryClientProvider>
  );
}

export default App;

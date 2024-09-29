import React from "react";
import {
  QueryClientProvider,
  QueryClient
} from "@tanstack/react-query";
import Program from "./Program";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Program />
    </QueryClientProvider>
  );
};

export default App;

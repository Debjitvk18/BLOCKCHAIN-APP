import React from "react";
import ReactDOM from "react-dom/client"; // Updated import
import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";

// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById("root")); // Use createRoot instead of render
root.render(
  <React.StrictMode>
    <TransactionsProvider>
      <App/>
    </TransactionsProvider>
  </React.StrictMode>
);

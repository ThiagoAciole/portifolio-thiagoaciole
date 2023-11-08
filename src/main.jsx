import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LikeProvider } from "./contexts/LikeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LikeProvider>
      <App />
    </LikeProvider>
  </React.StrictMode>
);

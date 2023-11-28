import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import Pizza from './components/Pizza';

// Data
import { pizzaData } from './data/pizzaData';

export default function App() {
  return (
    <div>
      <h1>Pizza menu</h1>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

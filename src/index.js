import React from 'react';
import ReactDOM from 'react-dom/client';

// Sass
import './sass/global.scss';

// Components
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

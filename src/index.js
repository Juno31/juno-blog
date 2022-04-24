// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Components
import App from './pages/App';

// Css
import Globalstyles from './global'


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Globalstyles />
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);


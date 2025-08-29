import React from 'react';
import './Main.css';

const Main = ({ children }) => (
  <main className="main-content">
    {children || <p>Welcome to the dashboard!</p>}
  </main>
);

export default Main;

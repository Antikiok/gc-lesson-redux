import React, { useState } from 'react';
import Header from './Header.jsx';
import { userData } from './userData-context';

const App = () => {
  useState({
    userData: userData.teslaUser,
  });

  return (
    <div className="page">
      <Header />
    </div>
  );
};

export default App;

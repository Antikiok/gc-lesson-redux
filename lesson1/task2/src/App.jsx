/* eslint-disable class-methods-use-this */
import React from 'react';
import Header from './Header.jsx';
import { userData } from './userData-context';

class App extends React.Component {
  state = {
    userData: userData.teslaUser,
  };

  render() {
    return (
      <div className="page">
        <Header />
      </div>
    );
  }
}

export default App;

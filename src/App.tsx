import React from 'react';
import MainWindow from './components/MainWindow';
import Store from './Store';

import './App.css';

function App() {
  

  return (
    <main className="App-main">
      
      <Store>
        <MainWindow />  
      </Store>

    </main>
  );
}

export default App;

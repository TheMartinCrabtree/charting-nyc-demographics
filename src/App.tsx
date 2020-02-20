import React from 'react';
import MainWindow from './components/MainWindow';
import Store from './Store';

import './App.css';

function App() {
  

  return (
    <main>
      <header><h3>Recharts Demo: Charting NYC Demographic Data</h3></header>
        <Store>
          <MainWindow />  
        </Store>

    </main>
  );
}

export default App;

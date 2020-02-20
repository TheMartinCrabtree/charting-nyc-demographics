import React from 'react';
import Store, { Context } from './Store';
import MainWindow from './components/MainWindow';
import './App.css';



function App() {
  

  return (
    <main>
      <Store>
        <MainWindow />
      </Store>
    </main>
  );
}

export default App;

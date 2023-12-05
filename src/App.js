import React from 'react';
import './App.css';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Expense/Budget Tracker</h1>
      </header>
      <div className="container">
        <Balance />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;

// src/components/AddTransaction.js
import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('income');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    if (description.trim() === '' || !isValidAmount(amount)) {
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: description, // Change 'description' to 'text'
      amount: transactionType === 'expense' ? -Math.abs(+amount) : +amount,
    };

    addTransaction(newTransaction);
    setDescription('');
    setAmount('');
  };

  const isValidAmount = value => {
    // Regular expression to validate up to two decimal places
    const regex = /^\d+(\.\d{1,2})?$/;
    return regex.test(value);
  };

  return (
    <div className="form-container" style={{ height: '250px' }}>
      <h3 className="transactions">Add New Transaction</h3>
      <form onSubmit={onSubmit} className="transactions">
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Enter description..."
          />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <div>
          <label>Transaction Type</label>
          <div className="transaction-type-buttons">
            <div
              className={`transaction-type-button income ${transactionType === 'income' ? 'selected' : ''}`}
              onClick={() => setTransactionType('income')}
            >
              Income
            </div>
            <div
              className={`transaction-type-button expense ${transactionType === 'expense' ? 'selected' : ''}`}
              onClick={() => setTransactionType('expense')}
            >
              Expense
            </div>
          </div>
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;

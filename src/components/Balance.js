// src/components/Balance.js
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const balance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0).toFixed(2);

  const isNegative = balance < 0;

  const [showNotification, setShowNotification] = useState(true); // Set to true initially

  return (
    <>
      <h4>Your Balance</h4>
      <h1 className={`balance ${isNegative ? 'negative-balance' : ''}`}>{isNegative ? '-' : ''}${Math.abs(balance)}</h1>
      {isNegative && showNotification && (
        <div className="notification">
          <p>Your account has hit a negative balance!</p>
        </div>
      )}
    </>
  );
};

export default Balance;

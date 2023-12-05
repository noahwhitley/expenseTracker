// src/components/Transaction.js
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const [isHovered, setIsHovered] = useState(false);

  if (!transaction || typeof transaction.amount === 'undefined') {
    console.error('Invalid transaction:', transaction);
    return null;
  }

  const { text, amount } = transaction;
  const sign = amount < 0 ? '-' : '+';
  const transactionType = amount < 0 ? 'minus' : 'plus';

  const handleDelete = () => {
    deleteTransaction(transaction.id);
  };

  return (
    <li
      className={`transaction ${transactionType}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        {text && <span>{text}</span>}
        {isHovered && (
          <button onClick={handleDelete} className="delete-button">
            X
          </button>
        )}
      </div>
      <span>{sign}${Math.abs(amount)}</span>
    </li>
  );
};

export default Transaction;

// src/components/TransactionList.js
import React, { useContext } from 'react';
import Transaction from './Transaction';
import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  console.log('Transactions Array:', transactions);

  return (
    <>
      <h3 className="transactions">Transaction History</h3>
      <ul className="transactions">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;

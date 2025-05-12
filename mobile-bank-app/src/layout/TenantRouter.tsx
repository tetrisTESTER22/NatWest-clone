import { useParams, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import AccountDetails from '../pages/accountDetails/AccountDetails';
import TransactionsPage from '../pages/transactionPage/TransactionPage';
import tenants from '../data/tenants.json';
import React from 'react';

export default function TenantRouter() {
  const { tenant } = useParams();
  const config = tenants[tenant as keyof typeof tenants];

  if (!config) return <h1>404: Админ не найден</h1>;

  return (
    <Routes>
      <Route
        path="/"
        element={<Home key={tenant} tenant={tenant!} config={config} />}
      />

      <Route path="/account" element={<AccountDetails tenant={tenant!} />} />
      <Route path="/transactions" element={<TransactionsPage tenant={tenant!} />} /> 

      <Route path="*" element={<Navigate to={`/${tenant}`} />} />
    </Routes>
  );
}

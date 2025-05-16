import { useParams, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import AccountDetails from '../pages/accountDetails/AccountDetails';
import TransactionsPage from '../pages/transactionPage/TransactionPage';
import React, { useEffect, useState } from 'react';

export default function TenantRouter() {
  const { tenant } = useParams();
  const [config, setConfig] = useState<any | null>(null);

  useEffect(() => {
    async function loadTenants() {
      try {
        const res = await fetch('/data/tenants.json');
        const tenants = await res.json();
        setConfig(tenants[tenant as string] || null);
      } catch (e) {
        console.error('Ошибка при загрузке tenants.json', e);
        setConfig(null);
      }
    }

    if (tenant) {
      loadTenants();
    }
  }, [tenant]);

  if (!tenant || config === null) return <h1></h1>;
  if (!config) return <h1></h1>;

  return (
    <Routes>
      <Route path="/" element={<Home key={tenant} tenant={tenant} config={config} />} />
      <Route path="/account" element={<AccountDetails tenant={tenant} />} />
      <Route path="/transactions" element={<TransactionsPage tenant={tenant} />} />
      <Route path="*" element={<Navigate to={`/${tenant}`} />} />
    </Routes>
  );
}

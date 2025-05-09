import accountD1 from '../data/ad1/account.json';
import accountD2 from '../data/ad2/account.json';

import transactionsD1 from '../data/ad1/transactions.json';
import transactionsD2 from '../data/ad2/transactions.json';

const accountMap: Record<string, any> = {
  ad1: accountD1,  
  ad2: accountD2,  
};

const transactionsMap: Record<string, any[]> = {
  ad1: transactionsD1,
  ad2: transactionsD2,
};

export function loadTenantAccount(tenant: string) {
  return accountMap[tenant] || null;
}

export function loadTenantTransactions(tenant: string) {
  return transactionsMap[tenant] || [];
}
